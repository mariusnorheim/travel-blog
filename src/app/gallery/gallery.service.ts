import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Gallery } from '@models/gallery.model';

@Injectable({
    providedIn: 'root',
})
export class GalleryService {
    constructor() {}

    private getStandardOptions(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
    }

    private galleries: Gallery[] = [
        {
            id: 1,
            name: 'Gallery 1',
            date: new Date(),
            lastModified: new Date(),
            destinationId: 1,
        },
        {
            id: 2,
            name: 'Gallery 2',
            date: new Date(),
            lastModified: new Date(),
            destinationId: 2,
        },
    ];

    getGalleries(): Observable<Gallery[]> {
        return of(this.galleries);
    }
}
