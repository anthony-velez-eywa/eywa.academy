import { Routes } from '@angular/router';
import { DashboardComponent as AdmDashboardComponent} from './views/logged/admin/dashboard/dashboard.component';
import { TeacherComponent as  AdmTeacherComponent} from './views/logged/admin/teacher/teacher.component';
import { CoursesComponent as StudentCoursesComponent} from './views/logged/student/courses/courses.component' ;
import { DashboardComponent as StudentDashboardComponent} from './views/logged/student/dashboard/dashboard.component';
import { TeacherComponent as  StudentTeacherComponent} from './views/logged/student/teacher/teacher.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { TeachersComponent } from './shared/views/teachers/teachers.component';
import { BlogComponent } from './views/blog/blog.component';
import { AboutComponent } from './views/about/about.component';
import { CoursesComponent } from './views/courses/courses.component';
import { CourseComponent } from './views/courses/course/course.component';
import { AdmCoursesComponent } from './views/logged/admin/adm-courses/adm-courses.component';
import { AdminCourseComponent } from './views/logged/admin/adm-courses/admin-course/admin-course.component';

export const routes: Routes = [
    { path: 'admin', children: [
        { path: 'courses', component: AdmCoursesComponent },
        { path: 'courses/:id', component: AdminCourseComponent },
        { path: 'dashboard', component: AdmDashboardComponent },
      ] 
    },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'teachers', component: TeachersComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'courses/:id', component: CourseComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog/:id', component: BlogComponent },
    { path: 'teacher/:id', component: AdmTeacherComponent },
    { path: 'student', children: [
        { path: 'courses', component: StudentCoursesComponent },
        { path: 'courses/:id', component: StudentCoursesComponent },
        { path: 'dashboard', component: StudentDashboardComponent },
        { path: 'teacher', component: StudentTeacherComponent },
      ] 
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home' by default
    { path: '**', redirectTo: '/home' }, // Redirect invalid routes
  ];