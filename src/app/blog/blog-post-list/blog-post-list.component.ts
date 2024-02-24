import { Component, OnInit } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';
import { BlogService } from '../blog.service';

import { CardModule } from 'primeng/card';
import { PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'blog-post-list',
    templateUrl: './blog-post-list.component.html',
    styleUrls: ['./blog-post-list.component.css'],
})
export class BlogPostListComponent implements OnInit {
    blogPosts: BlogPost[] = [];
    first: number = 0;
    rows: number = 4;
    totalPosts: number = 2;

    constructor(private blogService: BlogService) {}

    ngOnInit(): void {
        this.loadBlogPosts();
        // this.totalPosts = this.blogPosts.length || 0;
        console.log(this.totalPosts);
        this.first = 0;
        this.rows = 4;
    }

    private loadBlogPosts(): void {
        this.blogService.getPosts().subscribe((posts) => {
            this.blogPosts = posts;
        });
    }

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 4;
    }
}
