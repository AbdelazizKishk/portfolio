import { Component, inject } from '@angular/core';
import { ThemeServiceService } from '../../core/services/theme-service.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  themeServiceService = inject(ThemeServiceService);

  isMenuOpen = false;

  closeMenuAfterNavigate() {
    setTimeout(() => {
      this.isMenuOpen = false;
    }, 100); // 100ms كافية تدي فرصة للتنقل
  }
}
