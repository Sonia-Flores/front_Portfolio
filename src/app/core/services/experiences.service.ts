import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IExperience } from '../interfaces/experience.interface';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExperiencesService {
  private baseUrl = 'http://localhost:3000/api/experiences';
  private httpClient = inject(HttpClient);

  getAll() {
    return firstValueFrom(
      this.httpClient.get<IExperience[]>(this.baseUrl)
    );
  }
}
