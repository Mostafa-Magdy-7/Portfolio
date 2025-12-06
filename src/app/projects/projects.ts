import { Component } from '@angular/core';
import { Project } from '../models/Project';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Projectservice } from '../projectservice';
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects: Project[] = [];
 
    constructor(private projectService: Projectservice) {}
ngOnInit(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
        console.log('Projects loaded:', data); // Check your console to see if it works!
      },
      error: (error) => {
        console.error('Error fetching projects:', error);
      }
    });
  }
}
