import { Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CvComponent } from './pages/cv/cv.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/projects' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'cv', component: CvComponent },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.routes').then((m) => m.projectsRoutes),
  },
  { path: '**', redirectTo: '/projects' }
];
