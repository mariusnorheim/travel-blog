import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Destination } from '@models/destination.model';


@Injectable({
    providedIn: 'root',
})
export class DestinationsService {
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
            galleryId: [1],
            blogId: [1,2]
        },
        {
            id: 2,
            city: 'Koh Samui',
            country: 'Thailand',
            year: new Date('2023-12-22'),
            galleryId: [2],
            blogId: [1,2]
        },
        {
            id: 3,
            city: 'Ko Puh',
            country: 'Thailand',
            year: new Date('2023-12-11'),
            galleryId: [2],
            blogId: [1,2]
        },
        {
            id: 4,
            city: 'Krabi',
            country: 'Thailand',
            year: new Date(),
            galleryId: [2],
            blogId: [1,2]
        },
    ];

    getDestinations(): Observable<Destination[]> {
        return of(this.destinations);
    }
}
