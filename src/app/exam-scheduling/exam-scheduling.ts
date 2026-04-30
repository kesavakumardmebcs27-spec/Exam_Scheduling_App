import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ExamService } from '../services/exam.service';
import { Exam } from '../models/exam-models';

@Component({
  selector: 'app-exam-scheduling',
  imports: [FormsModule],
  templateUrl: './exam-scheduling.html',
  styleUrl: './exam-scheduling.css',
})
export class ExamScheduling {
  examService = inject(ExamService);

  newExam: Exam = {
    id: '',
    subject: '',
    date: new Date(),
    startTime: '',
    endTime: '',
    room: '',
    invigilator: '',
    maxMarks: 100
  };

  exams = this.examService.getExams();
  conflicts: string[] = [];

  addExam() {
    this.conflicts = this.examService.detectConflicts(this.newExam);
    if (this.conflicts.length === 0) {
      this.newExam.id = Date.now().toString();
      this.examService.addExam(this.newExam);
      this.newExam = {
        id: '',
        subject: '',
        date: new Date(),
        startTime: '',
        endTime: '',
        room: '',
        invigilator: '',
        maxMarks: 100
      };
    }
  }
}
