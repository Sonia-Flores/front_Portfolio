import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ExperienceComponent } from '../../components/experience/experience.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeroComponent, ExperienceComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
