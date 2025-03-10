import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent, title: 'Home Page' },
  { path: 'about', component: AboutComponent, title: 'About Us' },
  { path: 'contact', component: ContactComponent, title: 'Contact Us' },
  { path: 'projects', component: ProjectComponent, title: 'Our Projects' },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `home`
  { path: '**', component: HomeComponent },
];
