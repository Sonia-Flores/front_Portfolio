import { Component, inject } from '@angular/core';
import { IExperience } from '../../core/interfaces/experience.interface';
import { ExperiencesService } from '../../core/services/experiences.service';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  arrExperiences: IExperience[] = [];
  experiencesService = inject(ExperiencesService);

  async ngOnInit() {
    const response = await this.experiencesService.getAll();
    this.arrExperiences = response;
  }
}
