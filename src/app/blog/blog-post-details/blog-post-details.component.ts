import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'blog-post-details',
    templateUrl: './blog-post-details.component.html',
    styleUrl: './blog-post-details.component.css',
})
export class BlogPostDetailsComponent implements OnInit {
    postId!: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        // this.route.paramMap.subscribe((params) => {
        //     this.postId = +params.get('id'); // '+' converts the string to a number1
        //     // Now you can use this.postId to fetch or display the blog post details
        // });
    }
}
