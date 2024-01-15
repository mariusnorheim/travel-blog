import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog/blog-post.model';
import { BlogService } from '../blog.service';

@Component({
    selector: 'blog-post-list',
    templateUrl: './blog-post-list.component.html',
    styleUrls: ['./blog-post-list.component.css'],
})
export class BlogPostListComponent implements OnInit {
    blogPosts: BlogPost[] = [];

    constructor(private blogService: BlogService) {}

    ngOnInit(): void {
        this.loadBlogPosts();
    }

    private loadBlogPosts(): void {
        // Assuming getPosts() returns an Observable<BlogPost[]>
        this.blogService.getPosts().subscribe((posts) => {
            this.blogPosts = posts;
        });
    }

    // Add other component methods as needed
}
