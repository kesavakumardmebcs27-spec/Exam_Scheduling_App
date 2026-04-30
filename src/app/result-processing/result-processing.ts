import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../services/exam.service';
import { Mark } from '../models/exam-models';

@Component({
  selector: 'app-result-processing',
  imports: [FormsModule],
  templateUrl: './result-processing.html',
  styleUrl: './result-processing.css',
})
export class ResultProcessing {
  examService = inject(ExamService);

  newMark: Mark = {
    studentId: '',
    examId: '',
    marks: 0
  };

  students = this.examService.getStudents();
  exams = this.examService.getExams();
  marks = this.examService.getMarks();

  addMark() {
    if (this.newMark.marks >= 0 && this.newMark.marks <= 100) {
      this.newMark.grade = this.examService.calculateGrade(this.newMark.marks, this.exams().find(e => e.id === this.newMark.examId)?.maxMarks || 100);
      this.examService.addMark(this.newMark);
      this.newMark = {
        studentId: '',
        examId: '',
        marks: 0
      };
    }
  }

  generateResult(studentId: string, semester: number) {
    return this.examService.generateResult(studentId, semester);
  }
}
