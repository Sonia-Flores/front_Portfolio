import { Component } from '@angular/core';
import { CVComponent } from '../../components/cv/cv.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CVComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
