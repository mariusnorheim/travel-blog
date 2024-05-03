import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Destination } from '@models/destination.model';


@Injectable({
    providedIn: 'root',
})
export class DestinationService {
    constructor() {}

    private getStandardOptions(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
    }

    private destinations: Destination[] = [
        // Sample data
        {
            id: 1,
            city: 'Phuket',
            country: 'Thailand',
            year: new Date('2022-11-04'),
        },
        {
            id: 2,
            city: 'Koh Samui',
            country: 'Thailand',
            year: new Date('2023-12-22'),
        },
        {
            id: 3,
            city: 'Krabi',
            country: 'Thailand',
            year: new Date(),
        },
        {
            id: 4,
            city: 'Ko Lanta',
            country: 'Thailand',
            year: new Date(),
        },
    ];

    getDestinations(): Observable<Destination[]> {
        return of(this.destinations);
    }
}
