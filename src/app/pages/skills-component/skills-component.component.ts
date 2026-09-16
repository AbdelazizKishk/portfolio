import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import {
  ISkill,
  SkillCardComponent,
} from '../../shared/components/skill-card/skill-card.component';

@Component({
  selector: 'app-skills-component',
  imports: [SkillCardComponent],
  templateUrl: './skills-component.component.html',
  styleUrl: './skills-component.component.css',
})
export class SkillsComponentComponent {
  skills: ISkill[] = [
    {
      id: 1,
      name: 'HTML',
      icon: '/imgs/icons/html5.svg',
    },
    {
      id: 2,
      name: 'CSS',
      icon: '/imgs/icons/css3.svg',
    },
    {
      id: 3,
      name: 'Bootstrap',
      icon: '/imgs/icons/bootstrap.svg',
    },
    {
      id: 4,
      name: 'JavaScript',
      icon: '/imgs/icons/javascript.svg',
    },
    {
      id: 5,
      name: 'TypeScript',
      icon: '/imgs/icons/typescript.svg',
    },
    {
      id: 6,
      name: 'Tailwind CSS',
      icon: '/imgs/icons/tailwindcss.svg',
    },
    {
      id: 7,
      name: 'Sass',
      icon: '/imgs/icons/sass.svg',
    },
    {
      id: 8,
      name: 'Angular',
      icon: '/imgs/icons/angular.svg',
    },
    {
      id: 9,
      name: 'VS Code',
      icon: '/imgs/icons/vs-code.svg',
    },
    {
      id: 10,
      name: 'Git',
      icon: '/imgs/icons/git.svg',
    },
    {
      id: 11,
      name: 'Notion',
      icon: '/imgs/icons/Notion.png',
    },
    {
      id: 12,
      name: 'NPM',
      icon: '/imgs/icons/npm.svg',
    },
    {
      id: 13,
      name: 'Postman',
      icon: '/imgs/icons/postman.svg',
    },
  ];
}
