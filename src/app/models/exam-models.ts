export interface Student {
  id: string;
  name: string;
  email: string;
  rollNumber: string;
  department: string;
  semester: number;
}

export interface Exam {
  id: string;
  subject: string;
  date: Date;
  startTime: string;
  endTime: string;
  room: string;
  invigilator: string;
  maxMarks: number;
}

export interface Mark {
  studentId: string;
  examId: string;
  marks: number;
  grade?: string;
}

export interface Result {
  studentId: string;
  semester: number;
  gpa: number;
  grades: { subject: string; grade: string; marks: number }[];
}