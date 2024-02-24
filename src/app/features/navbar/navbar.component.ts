import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { MenuItem } from 'primeng/api';

import { Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

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
export class NavbarComponent implements OnInit, OnDestroy {
    items: MenuItem[] | undefined;
    isActiveHomeLink = false;
    private routerSub: Subscription;
  
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
      this.routerSub = this.router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute)
      ).subscribe(() => {
        const currentRoute = this.router.url;
        this.isActiveHomeLink = currentRoute === '/' || currentRoute.startsWith('/blog/');
      });
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Blog',
                icon: 'pi-fw pi-book',
                url: '/',
                homelink: true,
                external: false
            },
            {
                label: 'Gallery',
                icon: 'pi-fw pi-image',
                url: '/gallery',
                homelink: false,
                external: false
            },
            {
                label: 'Destinations',
                icon: 'pi-fw pi-globe',
                url: '/destinations',
                homelink: false,
                external: false
            },
            {
                label: 'Instagram',
                icon: 'pi-fw pi-instagram',
                url: 'https://www.instagram.com/mariusinbloom',
                homelink: false,
                external: true
            }
        ];
    }

    ngOnDestroy() {
        this.routerSub.unsubscribe();
    }

    navigateTo(link: string): void {
        this.router.navigate([link]);
    }
}
