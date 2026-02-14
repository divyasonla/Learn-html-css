
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { topic, courseType } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY not configured");

    const prompt = `Generate a quiz for the topic "${topic}" in ${courseType || "CSS"}.

Return EXACTLY a JSON array of 12 question objects. No markdown, no explanation, just valid JSON.

Rules:
- Mix question types: MCQ (8), True/False (2), Fill-in-the-blank (1), Code-based (1)
- Difficulty: 4 Easy, 6 Medium, 2 Hard
- Each question must be unique and test real knowledge
- For code questions, use realistic code snippets

Each object must have this exact shape:
{
  "question": "string",
  "type": "mcq" | "true-false" | "fill-blank" | "code",
  "difficulty": "easy" | "medium" | "hard",
  "options": ["A", "B", "C", "D"],
  "correctIndex": 0-3,
  "explanation": "short explanation"
}

For true/false: options should be ["True", "False", "", ""] with correctIndex 0 or 1.
For fill-blank: question should have ___ and options are possible answers.
For code: include a code snippet in the question.

Topic: ${topic}
Course: ${courseType || "CSS"}`;

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-2.5-flash",
          messages: [
            {
              role: "system",
              content: "You are a quiz generator. Return ONLY valid JSON arrays. No markdown formatting, no code blocks, no explanation. Just the raw JSON array.",
            },
            { role: "user", content: prompt },
          ],
        }),
      }
    );

    if (!response.ok) {
      const t = await response.text();
      console.error("AI error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const raw = data.choices?.[0]?.message?.content || "[]";
    
    // Extract JSON from potential markdown code blocks
    let jsonStr = raw.trim();
    if (jsonStr.startsWith("```")) {
      jsonStr = jsonStr.replace(/^```(?:json)?\n?/, "").replace(/\n?```$/, "");
    }
    
    const questions = JSON.parse(jsonStr);

    return new Response(
      JSON.stringify({ questions }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (e) {
    console.error("generate-quiz error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
