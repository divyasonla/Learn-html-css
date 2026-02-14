import { useState, useEffect } from "react";
import type { QuizQuestion } from "@/data/courseData";
import { CheckCircle2, XCircle, ChevronRight, Loader2, RefreshCw, Zap, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface AIQuestion {
  question: string;
  type: string;
  difficulty: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

interface QuizProps {
  questions: QuizQuestion[]; // fallback static questions
  onComplete: (score: number, total: number) => void;
  lessonTitle?: string;
  courseType?: string;
}

const difficultyColor: Record<string, string> = {
  easy: "text-success bg-success/10 border-success/30",
  medium: "text-accent bg-accent/10 border-accent/30",
  hard: "text-destructive bg-destructive/10 border-destructive/30",
};

const Quiz = ({ questions: staticQuestions, onComplete, lessonTitle, courseType }: QuizProps) => {
  const [aiQuestions, setAiQuestions] = useState<AIQuestion[] | null>(null);
  const [loading, setLoading] = useState(false);
  const [aiError, setAiError] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timer, setTimer] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  // Fetch AI questions on mount
  useEffect(() => {
    if (lessonTitle) {
      fetchAIQuestions();
    }
  }, [lessonTitle]);

  // Timer
  useEffect(() => {
    if (!timerActive || timer <= 0) return;
    const id = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [timerActive, timer]);

  useEffect(() => {
    if (timer === 0 && timerActive && !showResult) {
      handleSelect(-1);
    }
  }, [timer]);

  const fetchAIQuestions = async () => {
    setLoading(true);
    setAiError(false);
    try {
      const { data, error } = await supabase.functions.invoke("generate-quiz", {
        body: { topic: lessonTitle, courseType: courseType || "HTML & CSS" },
      });
      if (error) throw error;
      if (data?.questions?.length) {
        const shuffled = [...data.questions].sort(() => Math.random() - 0.5);
        setAiQuestions(shuffled);
        setTimerActive(true);
      } else {
        throw new Error("No questions");
      }
    } catch (e) {
      console.error("AI quiz error:", e);
      setAiError(true);
      // Fall back to static questions
      setTimerActive(true);
    } finally {
      setLoading(false);
    }
  };

  // Determine which questions to use
  const useAI = aiQuestions && aiQuestions.length > 0 && !aiError;
  const totalQuestions = useAI ? aiQuestions.length : staticQuestions.length;
  const currentQ = useAI ? aiQuestions[currentIndex] : null;
  const currentStatic = !useAI ? staticQuestions[currentIndex] : null;

  const getQuestion = () => currentQ?.question || currentStatic?.question || "";
  const getOptions = () => {
    if (currentQ) return currentQ.options.filter(Boolean);
    return currentStatic?.options || [];
  };
  const getCorrectIndex = () => currentQ?.correctIndex ?? currentStatic?.correctIndex ?? 0;

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    setTimerActive(false);
    if (idx === getCorrectIndex()) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
      setTimer(30);
      setTimerActive(true);
    } else {
      setFinished(true);
      setTimerActive(false);
      onComplete(score, totalQuestions);
    }
  };

  const passed = score >= Math.ceil(totalQuestions * 0.6);

  if (loading) {
    return (
      <div className="text-center py-10">
        <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto mb-3" />
        <p className="text-muted-foreground font-medium">🧠 AI is generating unique questions...</p>
        <p className="text-xs text-muted-foreground mt-1">Every quiz is different!</p>
      </div>
    );
  }

  if (finished) {
    return (
      <div className="text-center py-8">
        <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${passed ? "bg-success/10" : "bg-destructive/10"}`}>
          {passed ? (
            <CheckCircle2 className="w-10 h-10 text-success" />
          ) : (
            <XCircle className="w-10 h-10 text-destructive" />
          )}
        </div>
        <h3 className="text-2xl font-display font-bold mb-2">
          {passed ? "🎉 Great Job!" : "Keep Practicing!"}
        </h3>
        <p className="text-muted-foreground mb-2">
          You scored <span className="font-bold text-foreground">{score}</span> out of{" "}
          <span className="font-bold text-foreground">{totalQuestions}</span>
          {passed ? " — Lesson complete! ✅" : " — You need 60% to pass."}
        </p>
        {useAI && (
          <p className="text-xs text-primary mb-4">✨ AI-generated questions</p>
        )}

        {/* Show explanations for AI questions */}
        {useAI && aiQuestions && (
          <div className="text-left mt-4 mb-6 space-y-2 max-h-60 overflow-y-auto">
            {aiQuestions.map((q, i) => (
              <div key={i} className="text-xs p-2 rounded-lg bg-muted/50">
                <span className="font-medium text-foreground">Q{i + 1}:</span>{" "}
                <span className="text-muted-foreground">{q.explanation}</span>
              </div>
            ))}
          </div>
        )}

        {!passed && (
          <button
            onClick={() => {
              setCurrentIndex(0);
              setSelected(null);
              setShowResult(false);
              setScore(0);
              setFinished(false);
              setTimer(30);
              if (lessonTitle) {
                setAiQuestions(null);
                fetchAIQuestions();
              } else {
                setTimerActive(true);
              }
            }}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Try Again {useAI ? "(New Questions)" : ""}
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Question {currentIndex + 1} of {totalQuestions}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-primary flex items-center gap-1">
            <Zap className="w-3.5 h-3.5" /> {score}
          </span>
          <span className={`text-sm font-mono font-bold flex items-center gap-1 ${timer <= 10 ? "text-destructive" : "text-muted-foreground"}`}>
            <Clock className="w-3.5 h-3.5" /> {timer}s
          </span>
        </div>
      </div>

      <div className="w-full bg-muted rounded-full h-2 mb-4">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
        />
      </div>

      {/* AI badge + difficulty */}
      <div className="flex items-center gap-2 mb-3 flex-wrap">
        {useAI && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/30 font-medium">
            ✨ AI Generated
          </span>
        )}
        {currentQ?.difficulty && (
          <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${difficultyColor[currentQ.difficulty] || ""}`}>
            {currentQ.difficulty}
          </span>
        )}
        {currentQ?.type && (
          <span className="text-xs px-2 py-0.5 rounded-full border border-border bg-muted text-muted-foreground">
            {currentQ.type === "mcq" ? "MCQ" : currentQ.type === "true-false" ? "True/False" : currentQ.type === "fill-blank" ? "Fill in Blank" : "Code"}
          </span>
        )}
      </div>

      <h4 className="text-lg font-display font-semibold mb-4 whitespace-pre-wrap">{getQuestion()}</h4>

      <div className="space-y-3 mb-6">
        {getOptions().map((opt, idx) => {
          let optionClass = "border-border bg-card hover:bg-muted/50 cursor-pointer";
          const correctIdx = getCorrectIndex();
          if (showResult) {
            if (idx === correctIdx) {
              optionClass = "border-success bg-success/10";
            } else if (idx === selected && idx !== correctIdx) {
              optionClass = "border-destructive bg-destructive/10";
            } else {
              optionClass = "border-border bg-card opacity-50";
            }
          } else if (idx === selected) {
            optionClass = "border-primary bg-primary/5";
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={showResult}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${optionClass}`}
            >
              <span className="font-mono text-sm text-muted-foreground mr-3">
                {String.fromCharCode(65 + idx)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      {/* Explanation after answer */}
      {showResult && currentQ?.explanation && (
        <div className={`p-3 rounded-lg mb-4 text-sm ${selected === getCorrectIndex() ? "bg-success/10 border border-success/30" : "bg-destructive/10 border border-destructive/30"}`}>
          <p className="text-foreground">
            {selected === getCorrectIndex() ? "✅ " : "❌ "}
            <span className="text-muted-foreground">{currentQ.explanation}</span>
          </p>
        </div>
      )}

      {showResult && (
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors ml-auto"
        >
          {currentIndex < totalQuestions - 1 ? "Next" : "Finish"}
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Quiz;