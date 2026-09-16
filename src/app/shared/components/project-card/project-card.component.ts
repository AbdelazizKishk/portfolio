import { Component, input } from '@angular/core';
export interface IProject {
  id: number;
  name: string;
  description: string;
  demo: string;
  repo: string;
  image: string;
}
@Component({
  selector: 'app-project-card',
  imports: [],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  project = input.required<IProject>();
}
