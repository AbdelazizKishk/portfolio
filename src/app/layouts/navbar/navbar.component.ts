import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen!: boolean;
  closeMenuAfterNavigate() {
    setTimeout(() => {
      this.isMenuOpen = false;
    }, 100); // 100ms كافية تدي فرصة للتنقل
  }
}
