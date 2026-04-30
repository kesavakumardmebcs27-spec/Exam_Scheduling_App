import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExamSchedulingComponent } from './exam-scheduling/exam-scheduling.component';
import { ResultProcessingComponent } from './result-processing/result-processing.component';
import { NotificationsComponent } from './notifications/notifications.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'exam-scheduling', component: ExamSchedulingComponent },
  { path: 'result-processing', component: ResultProcessingComponent },
  { path: 'notifications', component: NotificationsComponent },
];
