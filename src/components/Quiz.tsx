import { useState } from "react";
import type { QuizQuestion } from "@/data/courseData";
import { CheckCircle2, XCircle, ChevronRight } from "lucide-react";

interface QuizProps {
  questions: QuizQuestion[];
  onComplete: (score: number, total: number) => void;
}

const Quiz = ({ questions, onComplete }: QuizProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const current = questions[currentIndex];

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === current.correctIndex) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
      const finalScore = score + (selected === current.correctIndex ? 0 : 0);
      onComplete(score, questions.length);
    }
  };

  const passed = score >= Math.ceil(questions.length * 0.6);

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
        <p className="text-muted-foreground mb-4">
          You scored <span className="font-bold text-foreground">{score}</span> out of{" "}
          <span className="font-bold text-foreground">{questions.length}</span>
          {passed ? " — Lesson complete! ✅" : " — You need 60% to pass."}
        </p>
        {!passed && (
          <button
            onClick={() => {
              setCurrentIndex(0);
              setSelected(null);
              setShowResult(false);
              setScore(0);
              setFinished(false);
            }}
            className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-muted-foreground">
          Question {currentIndex + 1} of {questions.length}
        </span>
        <span className="text-sm font-medium text-primary">
          Score: {score}
        </span>
      </div>

      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
        />
      </div>

      <h4 className="text-lg font-display font-semibold mb-4">{current.question}</h4>

      <div className="space-y-3 mb-6">
        {current.options.map((opt, idx) => {
          let optionClass = "border-border bg-card hover:bg-muted/50 cursor-pointer";
          if (showResult) {
            if (idx === current.correctIndex) {
              optionClass = "border-success bg-success/10";
            } else if (idx === selected && idx !== current.correctIndex) {
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

      {showResult && (
        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors ml-auto"
        >
          {currentIndex < questions.length - 1 ? "Next" : "Finish"}
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Quiz;
