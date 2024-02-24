import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BlogPost } from '../models/blog/blog-post.model';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    //constructor(private http: HttpClient) {}
    constructor() {}

    private getStandardOptions(): any {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
        };
    }

    private blogPosts: BlogPost[] = [
        // Sample data
        {
            id: 1,
            title: 'Sample Post 1',
            content: 'Text for sample post 1',
            date: new Date(),
            image: 'image-url-1',
        },
        {
            id: 2,
            title: 'Sample Post 2',
            content: 'Text for sample post 2...',
            date: new Date(),
        },
        // Add more posts here
    ];

    getPosts(): Observable<BlogPost[]> {
        //let options = this.getStandardOptions();
        // options.params = new HttpParams({
        //     fromObject: {
        //         format: 'json' // Equals to "url?format=json"
        //     }
        // });

        //return this.http.get('url', options)

        // This example uses 'of' to return an observable of the sample data
        // In a real application, you'd make an HTTP request to fetch posts
        return of(this.blogPosts);
    }

    // getPost(id: number): BlogPost {
    //     let options = this.getStandardOptions();
    //     options.params = new HttpParams({
    //         fromObject: {
    //             id: id // Equals to "url?id=1"
    //         }
    //     });

    //     return
    //     //return this.http.get('url', options)
    // }

    // createPost(post: BlogPost) {
    //     let options = this.getStandardOptions();
    //     options.headers = options.headers.set(
    //         'Authorization',
    //         'value-needed-for-auth',
    //     );

    //     return this.http.post('url', post, options);
    // }
}
