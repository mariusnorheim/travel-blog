import { Component, OnInit } from '@angular/core';
import { Post } from '@models/post.model';
import { PostService } from '@post/post.service';

import { PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'post-list',
    templateUrl: './post-list.component.html',
    styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {
    posts: Post[] = [];
    first: number = 0;
    rows: number = 4;
    totalPosts: number = 2;
    items: { label?: string; icon?: string; separator?: boolean }[] = [];

    constructor(private postService: PostService) {}

    ngOnInit(): void {
        this.loadPosts();
        // this.totalPosts = this.posts.length || 0;
        console.log(this.totalPosts);
        this.first = 0;
        this.rows = 4;

        this.items = [
            {
                label: 'Refresh',
                icon: 'pi pi-refresh'
            },
            {
                label: 'Search',
                icon: 'pi pi-search'
            },
            {
                separator: true
            },
            {
                label: 'Delete',
                icon: 'pi pi-times'
            }
        ];
    }

    private loadPosts(): void {
        this.postService.getPosts().subscribe((posts) => {
            this.posts = posts;
        });
    }

    onPageChange(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 4;
    }
}
