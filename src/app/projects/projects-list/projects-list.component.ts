import { Component, inject } from '@angular/core';
import { ProjectsService } from '../../core/services/projects.service';
import { IProject } from '../../core/interfaces/project.interface';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {
  arrProjects: IProject[] = [];
  projectsService = inject(ProjectsService);

  async ngOnInit() {
    const response = await this.projectsService.getAll();
    this.arrProjects = response;
  }
}
