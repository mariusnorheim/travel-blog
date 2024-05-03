import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrl: './gallery-list.component.css'
})
export class GalleryListComponent implements OnInit {
    first: number = 0;
    rows: number = 3;
    totalGalleries: number = 2;
    items: { label?: string; icon?: string; separator?: boolean }[] = [];
    images: any[] | undefined;
    responsiveOptions: any[] | undefined;

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

        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];

        //this.photoService.getImages().then((images) => (this.images = images));
        this.images = [
            {
                itemImageSrc: 'https://primeng.org/images/galleria/galleria1.jpg',
                thumbnailImageSrc: 'https://primeng.org/images/galleria/galleria1s.jpg',
                alt: 'Description for Image 1',
                title: 'Title 1'
            }
        ];
    }

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 4;
    }
}
