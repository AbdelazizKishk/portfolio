import { NgOptimizedImage } from '@angular/common';
import { Component, input } from '@angular/core';

export interface ISkill {
  id: number;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-skill-card',
  imports: [NgOptimizedImage],
  templateUrl: './skill-card.component.html',
  styleUrl: './skill-card.component.css',
})
export class SkillCardComponent {
  skill = input.required<ISkill>();
}
