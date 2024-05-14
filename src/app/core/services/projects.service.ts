import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { IProject } from '../interfaces/project.interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private baseUrl = 'http://localhost:3000/api/projects';
  private httpClient = inject(HttpClient);

  getAll() {
    return firstValueFrom(
      this.httpClient.get<IProject[]>(this.baseUrl)
    );
  }
}
