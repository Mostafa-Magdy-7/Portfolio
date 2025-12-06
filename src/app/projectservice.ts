import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Project {
  id: number;
  title: string;
  description: string;
  sourceUrl: string;
  liveUrl: string;
  tags: string[];
  image: string;
}
@Injectable({
  providedIn: 'root',
})

export class Projectservice {
  private apiUrl = 'https://my-json-server.typicode.com/Mostafa-Magdy-7/Portfolio/projects';

  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
}
