import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeedComponent } from './feed/feed-dash/feed.component';
import { PlanningDashboardComponent } from './planning/planning-dashboard/planning-dashboard.component';
import { RoutesComponent } from './routes/routes.component';

const routes: Routes = [
  { path: '', redirectTo: 'feed', pathMatch: 'full' },
  { path: 'feed', component: FeedComponent },
  { path: 'planning', component: PlanningDashboardComponent },
  { path: 'routes', component: RoutesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
