import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface QuizUser {
  name: string;
  email: string;
}

interface QuizAuthContextType {
  user: QuizUser | null;
  signup: (name: string, email: string, password: string) => { success: boolean; error?: string };
  login: (email: string, password: string) => { success: boolean; error?: string };
  logout: () => void;
}

const USERS_KEY = "codemaster-quiz-users";
const SESSION_KEY = "codemaster-quiz-session";

const QuizAuthContext = createContext<QuizAuthContextType | null>(null);

function getUsers(): Record<string, { name: string; password: string }> {
  try {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || "{}") || {};
    console.log("Fetched users from localStorage:", users);
    return users;
  } catch (error) {
    console.error("Error parsing users from localStorage:", error);
    return {};
  }
}

export function QuizAuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<QuizUser | null>(() => {
    try {
      const s = localStorage.getItem(SESSION_KEY);
      return s ? JSON.parse(s) : null;
    } catch {
      return null;
    }
  });

  const signup = useCallback((name: string, email: string, password: string) => {
    const users = getUsers();
    const trimmedEmail = email.trim().toLowerCase();

    if (users[trimmedEmail]) {
      return { success: false, error: "Email already registered" };
    }

    if (!name.trim() || !password || password.length < 6) {
      return {
        success: false,
        error: "Invalid input. Ensure all fields are filled and password is at least 6 characters.",
      };
    }

    users[trimmedEmail] = { name: name.trim(), password };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const newUser = { name: name.trim(), email: trimmedEmail };
    localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
    setUser(newUser);

    return { success: true };
  }, []);

  const login = useCallback((email: string, password: string) => {
    const users = getUsers();
    const trimmedEmail = email.trim().toLowerCase();

    console.log("Attempting login with email:", trimmedEmail);
    console.log("Stored users:", users);

    if (!trimmedEmail || !password) {
      console.error("Email or password is empty");
      return { success: false, error: "Email and password are required" };
    }

    const user = users[trimmedEmail];

    if (!user) {
      console.error("Email not found:", trimmedEmail);
      return { success: false, error: "Email not found" };
    }

    if (user.password !== password) {
      console.error("Password mismatch for email:", trimmedEmail);
      return { success: false, error: "Incorrect password" };
    }

    const loggedInUser = { name: user.name, email: trimmedEmail };
    localStorage.setItem(SESSION_KEY, JSON.stringify(loggedInUser));
    setUser(loggedInUser);

    console.log("Login successful for user:", loggedInUser);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  }, []);

  return (
    <QuizAuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </QuizAuthContext.Provider>
  );
}

export function useQuizAuth() {
  const ctx = useContext(QuizAuthContext);
  if (!ctx) throw new Error("useQuizAuth must be inside QuizAuthProvider");
  return ctx;
}