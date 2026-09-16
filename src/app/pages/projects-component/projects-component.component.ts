import { Component } from '@angular/core';
import {
  IProject,
  ProjectCardComponent,
} from '../../shared/components/project-card/project-card.component';

@Component({
  selector: 'app-projects-component',
  imports: [ProjectCardComponent],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.css',
})
export class ProjectsComponentComponent {
  projects: IProject[] = [
    {
      id: 1,
      name: 'E-commerce App',
      description: 'A modern e-commerce application built with Angular.',
      demo: 'https://shop-co-sable.vercel.app/',
      repo: 'https://github.com/AbdelazizKishk/Shop.co',
      image: '/projects/p6.png',
    },
    {
      id: 2,
      name: 'Foodi Restaurant',
      description: 'A responsive restaurant website with a modern design.',
      demo: 'https://restaurant-one-lemon.vercel.app/',
      repo: 'https://github.com/AbdelazizKishk/restaurant',
      image: '/projects/p9.png',
    },
    {
      id: 3,
      name: 'MovieZone App',
      description: 'A movie discovery application with a sleek interface.',
      demo: 'https://the-moviezone.vercel.app/',
      repo: 'https://github.com/AbdelazizKishk/MovieZone',
      image: '/projects/p8.png',
    },
    {
      id: 4,
      name: 'Notes App',
      description:
        'The Notes App is a web-based application built using Angular that allows users to create, update, and delete notes efficiently.',
      demo: 'https://note-app-pi-two.vercel.app/',
      repo: 'https://github.com/AbdelazizKishk/Note-App',
      image: '/projects/p7.png',
    },
    {
      id: 5,
      name: 'Bookmarker',
      description:
        'CRUD Saving links For Websites in local storage with Angular',
      demo: 'https://abdelazizkishk.github.io/Bookmark-your-favorite-sites/',
      repo: 'https://github.com/AbdelazizKishk/Bookmark-your-favorite-sites',
      image: '/projects/p2.png',
    },
    {
      id: 6,
      name: 'DevFolio',
      description:
        'Portfolio Landing page with main UI Tools and Animations using Angular',
      demo: 'https://abdelazizkishk.github.io/Daniels/',
      repo: 'https://github.com/AbdelazizKishk/Daniels',
      image: '/projects/p5.png',
    },
  ];
}
