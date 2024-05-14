import { Component } from '@angular/core';
import { CVComponent } from '../../components/cv/cv.component';

@Component({
  selector: 'page-cv',
  standalone: true,
  imports: [CVComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}
