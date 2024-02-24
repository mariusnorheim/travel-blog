import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';

@Component({
    standalone: true,
    selector: 'navbar',
    imports: [
        CommonModule,
        AvatarModule,
        ButtonModule,
        DockModule,
        InputTextModule,
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
                icon: 'pi pi-fw pi-home',
                url: '/blog',
                external: false
            },
            {
                label: 'Gallery',
                icon: 'pi pi-fw pi-image',
                url: '/gallery',
                external: false
            },
            {
                label: 'Destinations',
                icon: 'pi pi-fw pi-globe',
                url: '/destinations',
                external: false
            },
            {
                label: 'Instagram',
                icon: 'pi pi-fw pi-instagram',
                url: 'https://www.instagram.com/mariusinbloom',
                external: true
            }
        ];
    }

    navigateTo(link: string): void {
        this.router.navigate([link]);
    }
}
