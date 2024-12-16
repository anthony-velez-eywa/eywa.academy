import { Routes } from '@angular/router';
import { CoursesComponent as AdmCoursesComponent} from './views/admin/courses/courses.component' ;
import { DashboardComponent as AdmDashboardComponent} from './views/admin/dashboard/dashboard.component';
import { TeacherComponent as  AdmTeacherComponent} from './views/admin/teacher/teacher.component';
import { CoursesComponent as StudentCoursesComponent} from './views/student/courses/courses.component' ;
import { DashboardComponent as StudentDashboardComponent} from './views/student/dashboard/dashboard.component';
import { TeacherComponent as  StudentTeacherComponent} from './views/student/teacher/teacher.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { CourseComponent as AdmCourseComponent } from './views/admin/courses/course/course.component';
import { TeachersComponent } from './shared/views/teachers/teachers.component';
import { BlogComponent } from './views/blog/blog.component';
import { AboutComponent } from './views/about/about.component';

export const routes: Routes = [
    { path: 'admin', children: [
        { path: 'courses', component: AdmCoursesComponent },
        { path: 'courses/:id', component: AdmCourseComponent },
        { path: 'dashboard', component: AdmDashboardComponent },
      ] 
    },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog/:id', component: BlogComponent },
    { path: 'teacher/:id', component: AdmTeacherComponent },
    { path: 'student', children: [
        { path: 'courses', component: StudentCoursesComponent },
        { path: 'dashboard', component: StudentDashboardComponent },
        { path: 'teacher', component: StudentTeacherComponent },
      ] 
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home' by default
    { path: '**', redirectTo: '/home' }, // Redirect invalid routes
  ];