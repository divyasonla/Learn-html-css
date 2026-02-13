import { useParams, Link } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import { htmlCourse, cssCourse, getAllLessons } from "@/data/courseData";
import { ChevronRight, Lock, CheckCircle2 } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

const CoursePage = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courseId === "css" ? cssCourse : htmlCourse;
  const { isQuizPassed, isLessonCompleted, getQuizScore } = useProgress();
  const allLessons = getAllLessons(course);

  const isLessonUnlocked = (lessonIdx: number) => {
    if (lessonIdx === 0) return true;
    return isQuizPassed(allLessons[lessonIdx - 1].id);
  };

  let globalLessonIdx = 0;

  return (
    <AppLayout>
      <div className="p-6 md:p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-4xl">{course.icon}</span>
            <h1 className="text-3xl font-display font-bold">{course.title} Course</h1>
          </div>
          <p className="text-muted-foreground">{course.description}</p>
          <div className="mt-3 flex gap-4 text-sm">
            <span className="text-muted-foreground">
              ✅ {allLessons.filter((l) => isLessonCompleted(l.id)).length}/{allLessons.length} lessons completed
            </span>
            <span className="text-muted-foreground">
              🧪 {allLessons.filter((l) => isQuizPassed(l.id)).length}/{allLessons.length} quizzes passed
            </span>
          </div>
        </div>

        <div className="space-y-8">
          {course.topics.map((topic) => (
            <div key={topic.id}>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{topic.icon}</span>
                <div>
                  <h2 className="font-display font-semibold text-xl">{topic.title}</h2>
                  <span className={`inline-block px-2.5 py-0.5 text-xs rounded-full font-medium mt-1 ${
                    topic.level === "beginner"
                      ? "bg-success/10 text-success"
                      : topic.level === "intermediate"
                      ? "bg-warning/10 text-warning"
                      : "bg-destructive/10 text-destructive"
                  }`}>
                    {topic.level}
                  </span>
                </div>
              </div>

              <div className="space-y-2 ml-2">
                {topic.lessons.map((lesson) => {
                  const currentIdx = globalLessonIdx;
                  globalLessonIdx++;
                  const unlocked = isLessonUnlocked(currentIdx);
                  const completed = isLessonCompleted(lesson.id);
                  const quizDone = isQuizPassed(lesson.id);
                  const quizScore = getQuizScore(lesson.id);

                  return (
                    <div key={lesson.id}>
                      {unlocked ? (
                        <Link
                          to={`/lesson/${courseId}/${lesson.id}`}
                          className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border/50 hover:shadow-card hover:border-primary/30 transition-all group"
                        >
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            completed ? "bg-success/10 text-success" : "bg-primary/10 text-primary"
                          }`}>
                            {completed ? <CheckCircle2 className="w-5 h-5" /> : currentIdx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm group-hover:text-primary transition-colors">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground truncate">{lesson.description}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            {quizDone && quizScore && (
                              <span className="text-xs bg-success/10 text-success px-2 py-0.5 rounded-full">
                                {quizScore.score}/{quizScore.total}
                              </span>
                            )}
                            <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </Link>
                      ) : (
                        <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border/30 opacity-60 cursor-not-allowed">
                          <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                            <Lock className="w-4 h-4 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-muted-foreground">{lesson.title}</p>
                            <p className="text-xs text-muted-foreground">Pass previous quiz to unlock</p>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
};

export default CoursePage;
