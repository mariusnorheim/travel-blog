import { Component } from '@angular/core';

import { Destination } from '@models/destination.model';
import { DestinationsService } from '@destinations/destinations.service';

@Component({
    selector: 'app-destinations-list',
    templateUrl: './destinations-list.component.html',
    styleUrl: './destinations-list.component.css',
})
export class DestinationsListComponent {
    destinations: Destination[] = [];
    years: string[] = this.uniqueYears;

    constructor(private destinationsService: DestinationsService) {}

    ngOnInit(): void {
        this.loadDestinations();
        this.years = this.uniqueYears;
        console.log(this.destinations);
        console.log(this.years);
    }

    private loadDestinations(): void {
        this.destinationsService.getDestinations().subscribe((destinations) => {
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
}
