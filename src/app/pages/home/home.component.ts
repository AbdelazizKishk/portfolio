import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import * as AOS from 'aos';
import { AboutComponentComponent } from '../about-component/about-component.component';
import { SkillsComponentComponent } from '../skills-component/skills-component.component';
import { ProjectsComponentComponent } from '../projects-component/projects-component.component';
import { ContactComponentComponent } from '../contact-component/contact-component.component';
import { MainIntroComponentComponent } from '../main-intro-component/main-intro-component.component';

@Component({
  selector: 'app-home',
  imports: [
    AboutComponentComponent,
    SkillsComponentComponent,
    ProjectsComponentComponent,
    ContactComponentComponent,
    MainIntroComponentComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit, AfterViewInit {
  private readonly renderer2 = inject(Renderer2);
  private readonly el = inject(ElementRef);
  private readonly pLATFORM_ID = inject(PLATFORM_ID);
  showScrollTopBtn = false;
  ngOnInit(): void {
    this.renderer2.listen('window', 'scroll', () => {
      const hero = this.el.nativeElement.querySelector('home');
      const heroHeight = hero?.offsetHeight || 300;

      const scrollY =
        window.pageYOffset || document.documentElement.scrollTop || 0;

      this.showScrollTopBtn = scrollY > heroHeight;
    });
  }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.pLATFORM_ID)) {
      AOS.init({
        offset: 100, // offset (in px) from the original trigger point
        duration: 800, // animation duration
        easing: 'ease-in-out',
        delay: 100,
        once: false, // animate on every scroll
        mirror: true,
        disable: false,
      });
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
