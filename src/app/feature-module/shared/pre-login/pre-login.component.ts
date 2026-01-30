import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pre-login',
  imports: [],
  templateUrl: './pre-login.component.html',
  styleUrl: './pre-login.component.scss'
})
export class PreLoginComponent {
  scrollY = 0;

  features: any[] = [
    {
      icon: '🛒',
      title: 'Smart Shopping Cart',
      description: 'AI-powered recommendations that boost your sales by understanding customer preferences'
    },
    {
      icon: '⚡',
      title: 'Lightning Checkout',
      description: 'One-click checkout experience that reduces cart abandonment by 60%'
    },
    {
      icon: '✨',
      title: 'Wishlist & Favorites',
      description: 'Let customers curate and share their dream collections effortlessly'
    },
    {
      icon: '📦',
      title: 'Real-Time Tracking',
      description: 'Keep customers engaged with live order updates and delivery notifications'
    },
    {
      icon: '💎',
      title: 'Premium Products',
      description: 'Showcase your best products with stunning galleries and detailed views'
    },
    {
      icon: '🎯',
      title: 'Smart Analytics',
      description: 'Deep insights into customer behavior and sales patterns'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Component initialization
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.scrollY = window.scrollY;
  }

  navigateToSignup(): void {
    this.router.navigate(['/signup']);
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

}
