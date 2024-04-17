import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ResumeComponent } from './resume/resume.component';
import { CommunityComponent } from './community/community.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'formacion', component: ResumeComponent},
  {path: 'experiencia', component: ExperienceComponent},
  {path: 'comunidad', component: CommunityComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
