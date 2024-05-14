import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {YouTubePlayer} from '@angular/youtube-player';


declare const bootstrap: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, YouTubePlayer],
  template: '<youtube-player videoId="b7trmty5d9Y&t=6s"/>',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  
 
}
