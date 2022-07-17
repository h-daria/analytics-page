import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { InfoPageComponent } from './info-page/info-page.component';

const routes: Routes = [
  {path: '', component: AnalyticsPageComponent},
  {path: 'info-page', component: InfoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
