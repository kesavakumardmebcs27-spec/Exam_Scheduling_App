import { Component, inject } from '@angular/core';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  examService = inject(ExamService);

  exams = this.examService.getExams();
  students = this.examService.getStudents();
}
