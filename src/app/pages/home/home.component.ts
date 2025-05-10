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

@Component({
  selector: 'app-home',
  imports: [],
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
  /* downloadCV() {
    const link = document.createElement('a');
    link.href = '/Cv/Abdelaziz%20mohamed%20CV.pdf'; // استبدلنا المسافات بـ %20
    link.download = 'Abdelaziz Mohamed CV.pdf';
    link.target = '_blank'; // علشان يفتح في تاب جديدة لو المتصفح محتاج كده
    link.rel = 'noopener'; // أمان إضافي، يمنع صفحة الملف من التحكم في موقعك
    document.body.appendChild(link); // بنضيف الرابط مؤقتًا في الصفحة
    link.click(); // بننفذ الضغط على الرابط
    document.body.removeChild(link); // بنشيله من الصفحة بعد ما نخلص
  } */
}
