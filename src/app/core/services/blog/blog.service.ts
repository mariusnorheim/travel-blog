import { Injectable } from '@angular/core';
import { BlogPost } from '../../../shared/models/blog-post.model';

@Injectable({
    providedIn: 'root',
})
export class BlogService {
    private blogPosts: BlogPost[] = [
        // Sample data
        {
            id: 1,
            title: 'First Post',
            text: '...',
            date: new Date(),
            image: '...',
        },
        // ... other posts
    ];

    getPosts(): BlogPost[] {
        return this.blogPosts;
    }
}
