import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";

interface ProgressState {
  completedLessons: string[]; // lessonId[]
  quizScores: Record<string, { score: number; total: number }>; // lessonId -> score
  completedTopics: string[]; // topicId[]
}

interface ProgressContextType extends ProgressState {
  completeLesson: (lessonId: string) => void;
  saveQuizScore: (lessonId: string, score: number, total: number) => void;
  completeTopic: (topicId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isQuizPassed: (lessonId: string) => boolean;
  getQuizScore: (lessonId: string) => { score: number; total: number } | null;
  isTopicCompleted: (topicId: string) => boolean;
  totalCompleted: number;
  totalQuizzesPassed: number;
}

const STORAGE_KEY = "codemaster-progress";

const defaultState: ProgressState = {
  completedLessons: [],
  quizScores: {},
  completedTopics: [],
};

function loadProgress(): ProgressState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return defaultState;
}

function saveProgress(state: ProgressState) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

const ProgressContext = createContext<ProgressContextType | null>(null);

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProgressState>(loadProgress);

  useEffect(() => {
    saveProgress(state);
  }, [state]);

  const completeLesson = useCallback((lessonId: string) => {
    setState((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return { ...prev, completedLessons: [...prev.completedLessons, lessonId] };
    });
  }, []);

  const saveQuizScore = useCallback((lessonId: string, score: number, total: number) => {
    setState((prev) => ({
      ...prev,
      quizScores: { ...prev.quizScores, [lessonId]: { score, total } },
    }));
  }, []);

  const completeTopic = useCallback((topicId: string) => {
    setState((prev) => {
      if (prev.completedTopics.includes(topicId)) return prev;
      return { ...prev, completedTopics: [...prev.completedTopics, topicId] };
    });
  }, []);

  const isLessonCompleted = useCallback((lessonId: string) => state.completedLessons.includes(lessonId), [state.completedLessons]);

  const isQuizPassed = useCallback((lessonId: string) => {
    const q = state.quizScores[lessonId];
    if (!q) return false;
    return q.score >= Math.ceil(q.total * 0.6);
  }, [state.quizScores]);

  const getQuizScore = useCallback((lessonId: string) => state.quizScores[lessonId] || null, [state.quizScores]);

  const isTopicCompleted = useCallback((topicId: string) => state.completedTopics.includes(topicId), [state.completedTopics]);

  const totalCompleted = state.completedLessons.length;
  const totalQuizzesPassed = Object.values(state.quizScores).filter((q) => q.score >= Math.ceil(q.total * 0.6)).length;

  return (
    <ProgressContext.Provider
      value={{
        ...state,
        completeLesson,
        saveQuizScore,
        completeTopic,
        isLessonCompleted,
        isQuizPassed,
        getQuizScore,
        isTopicCompleted,
        totalCompleted,
        totalQuizzesPassed,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be inside ProgressProvider");
  return ctx;
}
