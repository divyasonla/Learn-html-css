import { useState } from "react";
import AppLayout from "@/components/AppLayout";
import CodeEditor from "@/components/CodeEditor";
import { practiceProjects } from "@/data/practiceData";
import { ChevronLeft, Eye, EyeOff } from "lucide-react";

const PracticePage = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showSolution, setShowSolution] = useState(false);

  const selected = practiceProjects.find((p) => p.id === selectedId);

  if (selected) {
    return (
      <AppLayout>
        <div className="p-6 md:p-8 max-w-5xl mx-auto">
          <button
            onClick={() => { setSelectedId(null); setShowSolution(false); }}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Projects
          </button>

          <h1 className="text-2xl font-display font-bold mb-2">{selected.title}</h1>
          <p className="text-muted-foreground mb-6">{selected.description}</p>

          <div className="bg-card rounded-xl p-6 border border-border/50 mb-6">
            <h2 className="font-display font-semibold mb-3">📋 Instructions</h2>
            <div className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
              {selected.instructions}
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-display font-semibold">
              {showSolution ? "✅ Solution" : "✏️ Your Code"}
            </h2>
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              {showSolution ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showSolution ? "Hide Solution" : "Show Solution"}
            </button>
          </div>

          <CodeEditor
            initialCode={showSolution ? selected.solutionCode : selected.starterCode}
            height="500px"
          />
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="p-6 md:p-8 max-w-5xl mx-auto">
        <h1 className="text-3xl font-display font-bold mb-2">⭐ Practice Projects</h1>
        <p className="text-muted-foreground mb-8">Build real-world projects to solidify your skills.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {practiceProjects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedId(project.id)}
              className="text-left bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-2.5 py-0.5 text-xs rounded-full font-medium ${
                  project.difficulty === "beginner"
                    ? "bg-success/10 text-success"
                    : project.difficulty === "intermediate"
                    ? "bg-warning/10 text-warning"
                    : "bg-destructive/10 text-destructive"
                }`}>
                  {project.difficulty}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{project.description}</p>
              <div className="flex gap-1.5 flex-wrap">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default PracticePage;
