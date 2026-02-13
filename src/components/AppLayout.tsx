import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BookOpen, Code2, Trophy, ChevronDown, ChevronRight, Home, Hammer, Menu, X, CheckCircle2, Lock } from "lucide-react";
import { htmlCourse, cssCourse, getAllLessons } from "@/data/courseData";
import { useProgress } from "@/hooks/useProgress";
import { getAuth, signOut } from "firebase/auth";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const { isLessonCompleted, isQuizPassed } = useProgress();

  const isActive = (path: string) => location.pathname === path;
  const isCoursePath = (prefix: string) => location.pathname.startsWith(prefix);

  const renderLessons = (course: typeof htmlCourse, courseId: string) => {
    const allLessons = getAllLessons(course);
    let globalIdx = 0;

    return course.topics.map((topic) => (
      <div key={topic.id}>
        <span className="block px-3 py-1 text-xs font-semibold text-sidebar-foreground/50 uppercase tracking-wider mt-2">
          {topic.icon} {topic.title}
        </span>
        {topic.lessons.map((lesson) => {
          const idx = globalIdx;
          globalIdx++;
          const unlocked = idx === 0 || isQuizPassed(allLessons[idx - 1].id);
          const completed = isLessonCompleted(lesson.id);

          if (!unlocked) {
            return (
              <span
                key={lesson.id}
                className="flex items-center gap-2 px-3 py-2 pl-6 rounded-md text-sm text-sidebar-foreground/30 cursor-not-allowed"
              >
                <Lock className="w-3 h-3" />
                <span className="truncate">{lesson.title}</span>
              </span>
            );
          }

          return (
            <SidebarLink
              key={lesson.id}
              to={`/lesson/${courseId}/${lesson.id}`}
              label={lesson.title}
              active={isActive(`/lesson/${courseId}/${lesson.id}`)}
              indent
              completed={completed}
            />
          );
        })}
      </div>
    ));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Nav */}
      <header className="sticky top-0 z-50 glass border-b border-border/50">
        <div className="flex items-center justify-between px-4 h-14">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
            >
              {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-hero flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg hidden sm:inline">CodeMaster</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            <Link to="/dashboard" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/dashboard") ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
              Dashboard
            </Link>
            <Link to="/course/html" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isCoursePath("/course/html") || isCoursePath("/lesson/html") ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
              HTML
            </Link>
            <Link to="/course/css" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isCoursePath("/course/css") || isCoursePath("/lesson/css") ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
              CSS
            </Link>
            <Link to="/practice" className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive("/practice") ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted"}`}>
              Practice
            </Link>
            {/* <LogoutButton className="fixed bottom-4 left-4" /> */}
          </nav>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`fixed lg:sticky top-14 z-40 h-[calc(100vh-3.5rem)] w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border overflow-y-auto transition-transform lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
          <nav className="p-3 space-y-1">
            <SidebarLink to="/dashboard" icon={<Home className="w-4 h-4" />} label="Dashboard" active={isActive("/dashboard")} />

            <SidebarSection title="HTML Course" icon="🌐" expanded={isCoursePath("/course/html") || isCoursePath("/lesson/html")}>
              {renderLessons(htmlCourse, "html")}
            </SidebarSection>

            <SidebarSection title="CSS Course" icon="🎨" expanded={isCoursePath("/course/css") || isCoursePath("/lesson/css")}>
              {renderLessons(cssCourse, "css")}
            </SidebarSection>

            <SidebarLink to="/practice" icon={<Hammer className="w-4 h-4" />} label="Practice Projects" active={isActive("/practice")} />
          </nav>
          <div className="sticky bottom-0 w-full p-3 bg-sidebar"> {/* Changed to sticky to fix the button at the bottom */}
            <button
              onClick={() => {
                const auth = getAuth();
                signOut(auth).then(() => {
                  window.location.href = '/login';
                }).catch((error) => {
                  console.error('Logout failed:', error);
                });
              }}
              className="w-full px-3 py-2 rounded-md text-sm font-medium bg-red-500 text-white hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        </aside>

        {/* Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-foreground/20 z-30 lg:hidden" onClick={() => setSidebarOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0">{children}</main>
      </div>
    </div>
  );
};

function SidebarLink({ to, icon, label, active, indent, completed }: {
  to: string; icon?: React.ReactNode; label: string; active: boolean; indent?: boolean; completed?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${indent ? "pl-6" : ""} ${
        active ? "bg-sidebar-accent text-sidebar-primary font-medium" : "text-sidebar-foreground/70 hover:bg-sidebar-accent/50 hover:text-sidebar-foreground"
      }`}
    >
      {completed ? <CheckCircle2 className="w-3.5 h-3.5 text-success flex-shrink-0" /> : icon}
      <span className="truncate">{label}</span>
    </Link>
  );
}

function SidebarSection({ title, icon, expanded: defaultExpanded, children }: {
  title: string; icon: string; expanded: boolean; children: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded);
  return (
    <div>
      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-2 w-full px-3 py-2 rounded-md text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 transition-colors"
      >
        <span>{icon}</span>
        <span className="flex-1 text-left">{title}</span>
        {expanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
      </button>
      {expanded && <div className="ml-1">{children}</div>}
    </div>
  );
}

export default AppLayout;
