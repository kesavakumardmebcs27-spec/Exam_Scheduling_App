import { Injectable, signal } from '@angular/core';
import { Exam, Student, Mark, Result } from '../models/exam-models';

@Injectable({
  providedIn: 'root'
})
export class ExamService {
  private exams = signal<Exam[]>([]);
  private students = signal<Student[]>([]);
  private marks = signal<Mark[]>([]);

  constructor() {
    // Mock data
    this.loadMockData();
  }

  private loadMockData() {
    this.students.set([
      { id: '1', name: 'John Doe', email: 'john@example.com', rollNumber: 'CS001', department: 'Computer Science', semester: 6 },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com', rollNumber: 'CS002', department: 'Computer Science', semester: 6 },
    ]);

    this.exams.set([
      { id: '1', subject: 'Data Structures', date: new Date('2024-05-01'), startTime: '10:00', endTime: '12:00', room: 'Room 101', invigilator: 'Dr. Smith', maxMarks: 100 },
      { id: '2', subject: 'Algorithms', date: new Date('2024-05-02'), startTime: '14:00', endTime: '16:00', room: 'Room 102', invigilator: 'Dr. Johnson', maxMarks: 100 },
    ]);
  }

  getExams() {
    return this.exams;
  }

  getStudents() {
    return this.students;
  }

  getMarks() {
    return this.marks;
  }

  addExam(exam: Exam) {
    this.exams.update(exams => [...exams, exam]);
  }

  addMark(mark: Mark) {
    this.marks.update(marks => [...marks, mark]);
  }

  calculateGrade(marks: number, maxMarks: number): string {
    const percentage = (marks / maxMarks) * 100;
    if (percentage >= 90) return 'A+';
    if (percentage >= 80) return 'A';
    if (percentage >= 70) return 'B+';
    if (percentage >= 60) return 'B';
    if (percentage >= 50) return 'C';
    return 'F';
  }

  calculateGPA(results: { grade: string }[]): number {
    const gradePoints: { [key: string]: number } = { 'A+': 4.0, 'A': 4.0, 'B+': 3.5, 'B': 3.0, 'C': 2.0, 'F': 0.0 };
    const total = results.reduce((sum, r) => sum + (gradePoints[r.grade] || 0), 0);
    return total / results.length;
  }

  generateResult(studentId: string, semester: number): Result {
    const studentMarks = this.marks().filter(m => m.studentId === studentId);
    const grades = studentMarks.map(m => {
      const exam = this.exams().find(e => e.id === m.examId);
      return {
        subject: exam?.subject || '',
        grade: this.calculateGrade(m.marks, exam?.maxMarks || 100),
        marks: m.marks
      };
    });
    const gpa = this.calculateGPA(grades);
    return { studentId, semester, gpa, grades };
  }

  detectConflicts(exam: Exam): string[] {
    const conflicts: string[] = [];
    const existingExams = this.exams().filter(e => e.date.toDateString() === exam.date.toDateString());

    for (const e of existingExams) {
      if (e.room === exam.room && ((exam.startTime >= e.startTime && exam.startTime < e.endTime) || (exam.endTime > e.startTime && exam.endTime <= e.endTime))) {
        conflicts.push(`Room conflict with ${e.subject}`);
      }
      if (e.invigilator === exam.invigilator && ((exam.startTime >= e.startTime && exam.startTime < e.endTime) || (exam.endTime > e.startTime && exam.endTime <= e.endTime))) {
        conflicts.push(`Invigilator conflict with ${e.subject}`);
      }
    }
    return conflicts;
  }
}