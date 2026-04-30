import { Component, inject } from '@angular/core';
import { ExamService } from '../services/exam.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  examService = inject(ExamService);

  exams = this.examService.getExams();
  students = this.examService.getStudents();
}
