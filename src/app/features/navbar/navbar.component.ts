import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';

@Component({
    standalone: true,
    selector: 'navbar',
    imports: [
        AvatarModule,
        ToolbarModule,
        ButtonModule,
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
