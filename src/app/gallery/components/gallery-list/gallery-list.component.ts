import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.css'
})
export class GalleryListComponent implements OnInit {
    first: number = 0;
    rows: number = 3;
    totalGalleries: number = 2;
    items: { label?: string; icon?: string; separator?: boolean }[] = [];

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
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

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 4;
    }
}
