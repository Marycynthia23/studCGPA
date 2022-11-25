import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CalculatecgpaComponent } from './calculatecgpa/calculatecgpa.component';
import { HomeComponent } from './home/home.component';
import { RegisterCoursesComponent } from './register-courses/register-courses.component';
import { UserHeroComponent } from './user-hero/user-hero.component';
import { UserPageComponent } from './user-page/user-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home/:id', component: UserPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'userhero/:id', component: UserHeroComponent},
  {path: 'registerCourses/:id', component: RegisterCoursesComponent},
  {path: 'calculatecgpa', component: CalculatecgpaComponent }


];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
