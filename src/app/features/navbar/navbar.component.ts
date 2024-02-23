import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';

@Component({
    standalone: true,
    selector: 'navbar',
    imports: [
        AvatarModule,
        ButtonModule,
        DockModule,
        ToolbarModule,
    ],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
    items: MenuItem[] | undefined;

    constructor(private router: Router) {}

    ngOnInit() {
        this.items = [
            {
                label: 'Blog',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/finder.svg',
                url: '/blog',
                external: false
            },
            {
                label: 'Gallery',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/appstore.svg',
                url: '/gallery',
                external: false
            },
            {
                label: 'Destinations',
                icon: 'https://primefaces.org/cdn/primeng/images/dock/photos.svg',
                url: '/destinations',
                external: false
            },
            {
                label: 'Instagram',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg',
                url: 'https://www.instagram.com/mariusinbloom',
                external: true
            }
        ];
    }

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
