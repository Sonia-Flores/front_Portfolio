import { Component } from '@angular/core';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [PdfViewerModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CVComponent {
  pdfSrc = "../../../assets/CV - SoniaFlores.pdf"
}
