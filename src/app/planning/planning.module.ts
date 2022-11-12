import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanningComponent } from './planning.component';
import { PlanningDashboardComponent } from './planning-dashboard/planning-dashboard.component';



@NgModule({
  declarations: [
    PlanningComponent,
    PlanningDashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PlanningModule { }
