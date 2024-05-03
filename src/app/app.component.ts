import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

import { NavbarComponent } from './features/navbar/navbar.component';
import { PostModule } from './post/post.module';
import { GalleryModule } from './gallery/gallery.module';
//import { PostService } from './posts/posts.service';

@Component({
    selector: 'travel-blog',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        PostModule,
        GalleryModule,
        NavbarComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
    // items!: Post[];
    // constructor(private postsService: PostService) {}
    // ngOnInit(): void {
    //     this.postService.getPosts().subscribe(
    //         (data: any) => {
    //             this.items = data;
    //         },
    //         (error: any) => {
    //             alert(error.message);
    //         }
    //     )
    // }

    constructor(private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
