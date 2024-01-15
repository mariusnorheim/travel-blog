import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
    standalone: true,
    selector: 'navbar',
    imports: [
        MatButtonModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatToolbarModule,
    ],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
    constructor(private router: Router) {}

    navigateTo(link: string): void {
        // Use Angular's Router to navigate
        this.router.navigate([link]);
    }

    // Example method for opening the Instagram page
    openInstagram(): void {
        // Implement the logic to open the Instagram page
        // For instance, you can use window.open() to open a new tab with the Instagram URL
        const instagramUrl = 'https://www.instagram.com/mariusinbloom';
        window.open(instagramUrl, '_blank');
    }

    // You can add more methods as needed, for example, for handling the login action
}
