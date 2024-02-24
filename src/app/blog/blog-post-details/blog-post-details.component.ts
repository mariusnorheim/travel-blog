import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';

@Component({
    selector: 'blog-post-details',
    templateUrl: './blog-post-details.component.html',
    styleUrl: './blog-post-details.component.css',
})
export class BlogPostDetailsComponent implements OnInit {
    postId!: number;
    items: { label?: string; icon?: string; separator?: boolean }[] = [];

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        // this.route.paramMap.subscribe((params) => {
        //     this.postId = +params.get('id'); // '+' converts the string to a number1
        //     // Now you can use this.postId to fetch or display the blog post details
        // });
        this.items = [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }
}
