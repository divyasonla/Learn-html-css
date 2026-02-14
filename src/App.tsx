import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ProgressProvider } from "@/hooks/useProgress";
import { QuizAuthProvider } from "@/hooks/useQuizAuth";
import AIChatbot from "@/components/AIChatbot";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CoursePage from "./pages/CoursePage";
import LessonPage from "./pages/LessonPage";
import PracticePage from "./pages/PracticePage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ProgressProvider>
        <QuizAuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>

              <Route path="/" element={<Index />} />

              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/dashboard" element={<><Dashboard /><AIChatbot /></>} />
              <Route path="/course/:courseId" element={<><CoursePage /><AIChatbot /></>} />
              <Route path="/lesson/:courseId/:lessonId" element={<><LessonPage /><AIChatbot /></>} />
              <Route path="/practice" element={<><PracticePage /><AIChatbot /></>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </QuizAuthProvider>
      </ProgressProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
