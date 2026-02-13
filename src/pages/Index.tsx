import { Link } from "react-router-dom";
import { Code2, BookOpen, Hammer, Trophy, ChevronRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Structured Lessons",
    description: "Step-by-step HTML & CSS courses from basics to advanced",
  },
  {
    icon: <Code2 className="w-6 h-6" />,
    title: "Live Code Editor",
    description: "Write code and see results instantly in your browser",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Quizzes & Projects",
    description: "Test your knowledge and build real-world projects",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Mentor",
    description: "Get help from an AI assistant anytime you're stuck",
  },
];

const handleNavigation = (navigate, isAuthenticated, path) => {
  if (isAuthenticated) {
    navigate(path);
  } else {
    navigate("/login");
  }
};

const Index = () => {
  const navigate = useNavigate();
  const isAuthenticated = false; // Replace with actual authentication logic

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-5" />
        <nav className="relative z-10 flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-soft">
              <Code2 className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-xl">CodeMaster</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium rounded-lg text-muted-foreground hover:text-foreground transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-hero text-primary-foreground shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        <section className="relative z-10 max-w-4xl mx-auto px-6 pt-20 pb-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            Free & Beginner Friendly
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Master{" "}
            <span className="text-gradient-hero">HTML & CSS</span>
            <br />
            By Building Real Projects
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Learn web development with interactive lessons, live coding, quizzes,
            and an AI mentor — all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => handleNavigation(navigate, isAuthenticated, "/course/html")}
              className="px-8 py-3.5 text-base font-semibold rounded-xl bg-gradient-hero text-primary-foreground shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              Start HTML Course
              <ChevronRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleNavigation(navigate, isAuthenticated, "/course/css")}
              className="px-8 py-3.5 text-base font-semibold rounded-xl bg-gradient-hero text-primary-foreground shadow-soft hover:shadow-elevated transition-all hover:-translate-y-0.5 flex items-center gap-2"
            >
              Start CSS Course
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Floating code snippets */}
          <div className="hidden md:block absolute top-32 left-8 bg-code text-code-foreground font-mono text-xs px-4 py-3 rounded-lg shadow-elevated animate-float opacity-80">
            &lt;h1&gt;Hello World&lt;/h1&gt;
          </div>
          <div className="hidden md:block absolute top-48 right-8 bg-code text-code-foreground font-mono text-xs px-4 py-3 rounded-lg shadow-elevated animate-float opacity-80" style={{ animationDelay: "1s" }}>
            color: teal;
          </div>
        </section>
      </header>

      {/* Features */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-4">
            Everything You Need to Learn Web Dev
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A complete learning platform with interactive tools designed for beginners.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={i}
                className="bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all hover:-translate-y-1 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {f.icon}
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-center mb-12">
            Choose Your Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link to="/course/html" className="group">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all hover:-translate-y-1">
                <span className="text-5xl mb-4 block">🌐</span>
                <h3 className="text-2xl font-display font-bold mb-2">HTML Course</h3>
                <p className="text-muted-foreground mb-4">
                  Learn the building blocks of every website. From basic tags to semantic HTML and forms.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Start Learning
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["Basics", "Text & Media", "Forms", "Semantic", "Advanced"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
            <Link to="/course/css" className="group">
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50 hover:shadow-elevated transition-all hover:-translate-y-1">
                <span className="text-5xl mb-4 block">🎨</span>
                <h3 className="text-2xl font-display font-bold mb-2">CSS Course</h3>
                <p className="text-muted-foreground mb-4">
                  Style and design beautiful websites. Master layouts, animations, and responsive design.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium">
                  Start Learning
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="mt-4 flex gap-2 flex-wrap">
                  {["Basics", "Box Model", "Flexbox", "Grid", "Responsive"].map((t) => (
                    <span key={t} className="px-2.5 py-1 text-xs rounded-full bg-info/10 text-info font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border bg-muted/20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-gradient-hero flex items-center justify-center">
              <Code2 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-semibold">CodeMaster</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Learn HTML & CSS the hands-on way. Free & open.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
