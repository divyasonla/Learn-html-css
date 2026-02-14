import { useParams, Link } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import CodeEditor from "@/components/CodeEditor";
import Quiz from "@/components/Quiz";
import { htmlCourse, cssCourse, findLesson, getNextLesson, getAllLessons } from "@/data/courseData";
import ReactMarkdown from "react-markdown";
import { ChevronLeft, ChevronRight, CheckCircle2, Lock, Loader2 } from "lucide-react";
import { useState } from "react";
import { useProgress } from "@/hooks/useProgress";
import { supabase } from "@/integrations/supabase/client";
import { AIQuestion } from "@/integrations/supabase/types";

const LessonPage = () => {
  const { courseId, lessonId } = useParams<{ courseId: string; lessonId: string }>();
  const course = courseId === "css" ? cssCourse : htmlCourse;
  const result = findLesson(course, lessonId || "");
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizQuestions, setQuizQuestions] = useState<AIQuestion[]>([]);
  const [loadingQuiz, setLoadingQuiz] = useState(false);
  const [quizError, setQuizError] = useState("");
  const { completeLesson, saveQuizScore, isLessonCompleted, isQuizPassed, getQuizScore } = useProgress();

  if (!result) {
    return (
      <AppLayout>
        <div className="p-8 text-center">
          <h1 className="text-2xl font-display font-bold mb-4">Lesson not found</h1>
          <Link to={`/course/${courseId}`} className="text-primary hover:underline">
            Back to course
          </Link>
        </div>
      </AppLayout>
    );
  }

  const { lesson, topic } = result;
  const nextLesson = getNextLesson(course, lesson.id);
  const allLessons = getAllLessons(course);
  const lessonIndex = allLessons.findIndex((l) => l.id === lesson.id);

  const isFirstLesson = lessonIndex === 0;
  const previousLesson = lessonIndex > 0 ? allLessons[lessonIndex - 1] : null;
  const isLocked = !isFirstLesson && previousLesson && !isQuizPassed(previousLesson.id);

  if (isLocked) {
    return (
      <AppLayout>
        <div className="p-8 text-center max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-4">
            <Lock className="w-10 h-10 text-muted-foreground" />
          </div>
          <h1 className="text-2xl font-display font-bold mb-2">Lesson Locked 🔒</h1>
          <p className="text-muted-foreground mb-6">
            Complete the quiz in <strong>"{previousLesson?.title}"</strong> to unlock this lesson.
          </p>
          <Link
            to={`/lesson/${courseId}/${previousLesson?.id}`}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Go to Previous Lesson
          </Link>
        </div>
      </AppLayout>
    );
  }

  const quizPassed = isQuizPassed(lesson.id);
  const quizScore = getQuizScore(lesson.id);
  const lessonDone = isLessonCompleted(lesson.id);

  // Define a wrapper function for fetchQuiz
  const handleFetchQuiz = () => {
    console.log("handleFetchQuiz triggered with topic:", lesson.title);
    fetchQuiz(lesson.title);
  };

  const fetchQuiz = async (topicId: string) => {
    console.log("fetchQuiz called with topicId:", topicId);
    setLoadingQuiz(true);
    setQuizError("");
    try {
      const { data, error: fnError } = await supabase.functions.invoke("generate-quiz", {
        body: { topic: topicId, courseType: courseId.toUpperCase() },
      });

      console.log("Supabase response:", data, fnError);

      if (fnError) {
        throw new Error(fnError.message);
      }

      if (!data?.questions?.length) {
        throw new Error("No questions generated. Please verify the Edge Function logic.");
      }

      setQuizQuestions(data.questions);
      setShowQuiz(true);
    } catch (error) {
      console.error("Error in fetchQuiz:", error);
      setQuizError(error.message);
    } finally {
      setLoadingQuiz(false);
    }
  };

  const handleQuizStart = () => {
    setShowQuiz(true);
    if (!quizQuestions.length) fetchQuiz(lesson.title);
  };``

  return (
    <AppLayout>
      <div className="p-6 md:p-8 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to={`/course/${courseId}`} className="hover:text-foreground transition-colors">
            {course.icon} {course.title}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span>{topic.icon} {topic.title}</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-foreground font-medium">{lesson.title}</span>
          {lessonDone && <CheckCircle2 className="w-4 h-4 text-success ml-1" />}
        </div>

        {/* Lesson Content */}
        <article className="mb-10">
          <div className="prose prose-sm sm:prose max-w-none
            [&_h1]:font-display [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-foreground
            [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-foreground
            [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:text-foreground
            [&_p]:text-muted-foreground [&_p]:leading-relaxed [&_p]:mb-4
            [&_ul]:text-muted-foreground [&_ul]:mb-4 [&_ul]:ml-4
            [&_ol]:text-muted-foreground [&_ol]:mb-4 [&_ol]:ml-4
            [&_li]:mb-1
            [&_strong]:text-foreground
            [&_code]:font-mono [&_code]:text-sm [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded
            [&_pre]:bg-code [&_pre]:text-code-foreground [&_pre]:rounded-lg [&_pre]:p-4 [&_pre]:mb-4 [&_pre]:overflow-x-auto
            [&_pre_code]:bg-transparent [&_pre_code]:p-0
            [&_table]:w-full [&_table]:border-collapse [&_table]:mb-4
            [&_th]:bg-muted [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:border [&_th]:border-border [&_th]:font-semibold [&_th]:text-foreground
            [&_td]:px-4 [&_td]:py-2 [&_td]:border [&_td]:border-border [&_td]:text-muted-foreground
            [&_blockquote]:border-l-4 [&_blockquote]:border-primary [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground
          ">
            <ReactMarkdown>{lesson.content}</ReactMarkdown>
          </div>
        </article>

        {/* Code Editor */}
        <section className="mb-10">
          <h2 className="text-xl font-display font-semibold mb-4 flex items-center gap-2">
            ✏️ Try It Yourself
          </h2>
          <CodeEditor initialCode={lesson.codeExample} height="350px" />
        </section>

        {/* Quiz Section */}
        <section className="mb-10">
          <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
            {loadingQuiz ? (
              <div className="text-center py-4">
                <Loader2 className="w-10 h-10 text-primary animate-spin mx-auto mb-2" />
                <p className="text-muted-foreground">Generating your quiz...</p>
              </div>
            ) : quizError ? (
              <div className="text-center py-4">
                <p className="text-destructive">{quizError}</p>
                <button
                  onClick={handleFetchQuiz}
                  className="px-6 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Retry
                </button>
              </div>
            ) : showQuiz && quizQuestions.length ? (
              <Quiz
                questions={quizQuestions}
                onComplete={(score, total) => {
                  saveQuizScore(lesson.id, score, total);
                  if (score >= Math.ceil(total * 0.6)) completeLesson(lesson.id);
                }}
                lessonTitle={lesson.title}
                courseType={courseId === "css" ? "CSS" : "HTML"}
              />
            ) : (
              <div className="text-center py-4">
                <h2 className="text-xl font-display font-semibold mb-2">🧪 Quiz Time!</h2>
                <p className="text-muted-foreground mb-4">
                  Test your knowledge with dynamically generated questions. Score 60% to unlock the next lesson.
                </p>
                <button
                  onClick={handleFetchQuiz}
                  className="px-6 py-2.5 rounded-lg bg-gradient-hero text-primary-foreground font-medium shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
                >
                  Start Quiz
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-6 border-t border-border">
          <Link
            to={`/course/${courseId}`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            All Lessons
          </Link>
          {nextLesson && quizPassed && (
            <Link
              to={`/lesson/${courseId}/${nextLesson.id}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Next: {nextLesson.title}
              <ChevronRight className="w-4 h-4" />
            </Link>
          )}
          {nextLesson && !quizPassed && (
            <span className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-muted text-muted-foreground cursor-not-allowed">
              <Lock className="w-4 h-4" />
              Pass quiz to continue
            </span>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default LessonPage;