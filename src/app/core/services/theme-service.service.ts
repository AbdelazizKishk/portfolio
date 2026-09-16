import { afterNextRender, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeServiceService {
  isDark = signal(false);

  constructor() {
    afterNextRender(() => {
      const savedTheme = localStorage.getItem('theme');

      if (savedTheme === 'dark') {
        this.isDark.set(true);
        document.documentElement.classList.add('dark');
      }
    });
  }

  toggle() {
    this.isDark.update((value) => !value);

    if (this.isDark()) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
}
