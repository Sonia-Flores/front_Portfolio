import { Routes } from '@angular/router';
import { ProjectsListComponent } from './projects-list/projects-list.component';

export const projectsRoutes: Routes = [
    {
        path: '', component: ProjectsListComponent
    }
];
