export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  codeExample: string;
  quiz: QuizQuestion[];
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  level: "beginner" | "intermediate" | "advanced";
  lessons: Lesson[];
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  topics: Topic[];
}

export function getAllLessons(course: Course): Lesson[] {
  return course.topics.flatMap(topic => topic.lessons);
}

export function findLesson(course: Course, lessonId: string): { lesson: Lesson; topic: Topic } | null {
  for (const topic of course.topics) {
    const lesson = topic.lessons.find(l => l.id === lessonId);
    if (lesson) return { lesson, topic };
  }
  return null;
}

export function getNextLesson(course: Course, currentLessonId: string): Lesson | null {
  const allLessons = getAllLessons(course);
  const idx = allLessons.findIndex(l => l.id === currentLessonId);
  return idx >= 0 && idx < allLessons.length - 1 ? allLessons[idx + 1] : null;
}

export { htmlCourse } from "./htmlCourseData";
export { cssCourse } from "./cssCourseData";
