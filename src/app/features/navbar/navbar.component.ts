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
export class NavbarComponent implements OnDestroy {
    isActiveHomeLink = false;
    private routerSub: Subscription;

    // sub to activatedRoute and include /blog/* routes to the home link
    // needed to highlight the home link when on a blog page
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {
        this.routerSub = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map(() => this.activatedRoute)
        ).subscribe(() => {
            const currentRoute = this.router.url;
            this.isActiveHomeLink = currentRoute === '/' || currentRoute.startsWith('/blog/');
        });
    }

    ngOnDestroy() {
        this.routerSub.unsubscribe();
    }
}
