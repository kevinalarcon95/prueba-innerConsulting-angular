import { CommonModule } from '@angular/common';
import { Component, EventEmitter, HostListener, Output } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, SearchComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() searchChanged = new EventEmitter<{text: string, type: string}>();
  isSmallScreen: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  ngOnInit() {
    this.isSmallScreen = window.innerWidth <= 768;
  }

  onSearchChange(searchData: {text: string, type: string}): void {
    this.searchChanged.emit(searchData);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
