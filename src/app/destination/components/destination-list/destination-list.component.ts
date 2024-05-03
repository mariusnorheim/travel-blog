import { Component } from '@angular/core';

import { Destination } from '@models/destination.model';
import { DestinationService } from '@destination/destination.service';
import { PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'app-destination-list',
    templateUrl: './destination-list.component.html',
    styleUrl: './destination-list.component.css',
})
export class DestinationListComponent {
    destinations: Destination[] = [];
    years: string[] = this.uniqueYears;
    first: number = 0;
    rows: number = 4;
    totalDestinations: number = 4;
    items: { label?: string; icon?: string; separator?: boolean }[] = [];

    constructor(private destinationService: DestinationService) {}

    ngOnInit(): void {
        this.loadDestinations();
        this.years = this.uniqueYears;
        console.log(this.destinations);
        console.log(this.years);
        this.first = 0;
        this.rows = 4;

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

    private loadDestinations(): void {
        this.destinationService.getDestinations().subscribe((destinations) => {
            this.destinations = destinations;
        });
    }

    get uniqueYears(): string[] {
        const years = this.destinations.map((dest) =>
            dest.year instanceof Date
                ? dest.year.getFullYear().toString()
                : parseInt(dest.year, 10).toString(),
        );
        return Array.from(new Set(years)).sort((a, b) => a.localeCompare(b));
    }

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 4;
    }
}
