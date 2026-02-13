import AppLayout from "@/components/AppLayout";
import { BookOpen, Code2, Trophy, CheckCircle2 } from "lucide-react";
import { htmlCourse, cssCourse, getAllLessons } from "@/data/courseData";
import { Link } from "react-router-dom";
import { useProgress } from "@/hooks/useProgress";

const Dashboard = () => {
  const htmlLessons = getAllLessons(htmlCourse);
  const cssLessons = getAllLessons(cssCourse);
  const totalLessons = htmlLessons.length + cssLessons.length;

  const { isLessonCompleted, isQuizPassed, getQuizScore, totalCompleted, totalQuizzesPassed } = useProgress();

  const completedHtml = htmlLessons.filter((l) => isLessonCompleted(l.id)).length;
  const completedCss = cssLessons.filter((l) => isLessonCompleted(l.id)).length;
  const htmlPercent = htmlLessons.length > 0 ? Math.round((completedHtml / htmlLessons.length) * 100) : 0;
  const cssPercent = cssLessons.length > 0 ? Math.round((completedCss / cssLessons.length) * 100) : 0;
  const overallPercent = totalLessons > 0 ? Math.round((totalCompleted / totalLessons) * 100) : 0;

  // Find next unlocked lesson for each course
  const getNextLesson = (lessons: typeof htmlLessons, courseId: string) => {
    for (let i = 0; i < lessons.length; i++) {
      if (!isLessonCompleted(lessons[i].id)) {
        const isUnlocked = i === 0 || isQuizPassed(lessons[i - 1].id);
        if (isUnlocked) return { lesson: lessons[i], courseId };
      }
    }
    return lessons.length > 0 ? { lesson: lessons[0], courseId } : null;
  };

  const nextHtml = getNextLesson(htmlLessons, "html");
  const nextCss = getNextLesson(cssLessons, "css");

  // Completed topics/quizzes for display
  const completedHtmlLessons = htmlLessons.filter((l) => isLessonCompleted(l.id));
  const completedCssLessons = cssLessons.filter((l) => isLessonCompleted(l.id));
  const allPassedQuizzes = [...htmlLessons, ...cssLessons]
    .filter((l) => isQuizPassed(l.id))
    .map((l) => ({ ...l, score: getQuizScore(l.id) }));

  return (
    <AppLayout>
      <div className="p-6 md:p-8 max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold mb-2">Welcome back! 👋</h1>
          <p className="text-muted-foreground">Track your progress and continue learning.</p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard icon={<BookOpen className="w-5 h-5" />} label="Total Lessons" value={String(totalLessons)} color="primary" />
          <StatCard icon={<CheckCircle2 className="w-5 h-5" />} label="Completed" value={String(totalCompleted)} color="success" />
          <StatCard icon={<Trophy className="w-5 h-5" />} label="Quizzes Passed" value={String(totalQuizzesPassed)} color="warning" />
          <StatCard icon={<Code2 className="w-5 h-5" />} label="Overall" value={`${overallPercent}%`} color="info" />
        </div>

        {/* Course Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <CourseProgressCard
            title="HTML Course"
            icon="🌐"
            percent={htmlPercent}
            completed={completedHtml}
            total={htmlLessons.length}
            link="/course/html"
          />
          <CourseProgressCard
            title="CSS Course"
            icon="🎨"
            percent={cssPercent}
            completed={completedCss}
            total={cssLessons.length}
            link="/course/css"
          />
        </div>

        {/* Continue Learning */}
        <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 mb-8">
          <h2 className="font-display font-semibold text-lg mb-4">Continue Learning</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {nextHtml && (
              <Link
                to={`/lesson/${nextHtml.courseId}/${nextHtml.lesson.id}`}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <span className="text-2xl">🌐</span>
                <div>
                  <p className="font-medium text-sm">{nextHtml.lesson.title}</p>
                  <p className="text-xs text-muted-foreground">HTML • Continue</p>
                </div>
              </Link>
            )}
            {nextCss && (
              <Link
                to={`/lesson/${nextCss.courseId}/${nextCss.lesson.id}`}
                className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <span className="text-2xl">🎨</span>
                <div>
                  <p className="font-medium text-sm">{nextCss.lesson.title}</p>
                  <p className="text-xs text-muted-foreground">CSS • Continue</p>
                </div>
              </Link>
            )}
          </div>
        </div>

        {/* Completed Lessons */}
        {(completedHtmlLessons.length > 0 || completedCssLessons.length > 0) && (
          <div className="bg-card rounded-xl p-6 shadow-card border border-border/50 mb-8">
            <h2 className="font-display font-semibold text-lg mb-4">✅ Completed Lessons</h2>
            <div className="space-y-2">
              {completedHtmlLessons.map((l) => (
                <Link key={l.id} to={`/lesson/html/${l.id}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">🌐 {l.title}</span>
                </Link>
              ))}
              {completedCssLessons.map((l) => (
                <Link key={l.id} to={`/lesson/css/${l.id}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                  <span className="text-sm font-medium">🎨 {l.title}</span>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Quiz Scores */}
        {allPassedQuizzes.length > 0 && (
          <div className="bg-card rounded-xl p-6 shadow-card border border-border/50">
            <h2 className="font-display font-semibold text-lg mb-4">🧪 Quiz Scores</h2>
            <div className="space-y-2">
              {allPassedQuizzes.map((l) => (
                <div key={l.id} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <span className="text-sm font-medium">{l.title}</span>
                  <span className="text-sm font-bold text-success">
                    {l.score?.score}/{l.score?.total} ✅
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppLayout>
  );
};

function StatCard({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
  const colorMap: Record<string, string> = {
    primary: "bg-primary/10 text-primary",
    success: "bg-success/10 text-success",
    warning: "bg-warning/10 text-warning",
    info: "bg-info/10 text-info",
  };
  return (
    <div className="bg-card rounded-xl p-5 shadow-card border border-border/50">
      <div className={`w-10 h-10 rounded-lg ${colorMap[color]} flex items-center justify-center mb-3`}>
        {icon}
      </div>
      <p className="text-2xl font-display font-bold">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}

function CourseProgressCard({
  title, icon, percent, completed, total, link,
}: {
  title: string; icon: string; percent: number; completed: number; total: number; link: string;
}) {
  return (
    <Link to={link} className="block bg-card rounded-xl p-6 shadow-card border border-border/50 hover:shadow-elevated transition-all hover:-translate-y-0.5">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">{icon}</span>
        <div>
          <h3 className="font-display font-semibold text-lg">{title}</h3>
          <p className="text-sm text-muted-foreground">{completed} of {total} lessons</p>
        </div>
      </div>
      <div className="w-full bg-muted rounded-full h-3">
        <div className="bg-gradient-hero h-3 rounded-full transition-all duration-500" style={{ width: `${percent}%` }} />
      </div>
      <p className="text-right text-sm font-medium text-muted-foreground mt-2">{percent}%</p>
    </Link>
  );
}

export default Dashboard;
