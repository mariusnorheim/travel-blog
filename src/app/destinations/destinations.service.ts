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
            year: new Date(),
            galleryId: [1],
            blogId: [1,2]
        },
        {
            id: 2,
            city: 'Koh Samui',
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
