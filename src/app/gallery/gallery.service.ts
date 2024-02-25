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
        // Sample data
        {
            id: 1,
            title: 'Sample gallery 1',
            city: 'Phuket',
            country: 'Thailand',
            year: new Date(),
            images: [
                {
                    text: 'text1',
                    src: 'image-url-1',
                },
                {
                    text: 'text2',
                    src: 'image-url-2',
                },
                {
                    text: 'text2',
                    src: 'image-url-2',
                },
            ]
        },
        {
            id: 2,
            title: 'Sample gallery 2',
            city: 'Krabi',
            country: 'Thailand',
            year: new Date(),
            images: [
                {
                    text: 'text1',
                    src: 'image-url-1',
                },
                {
                    text: 'text2',
                    src: 'image-url-2',
                },
                {
                    text: 'text2',
                    src: 'image-url-2',
                },
            ]
        },
    ];

    getGalleries(): Observable<Gallery[]> {
        return of(this.galleries);
    }
}
