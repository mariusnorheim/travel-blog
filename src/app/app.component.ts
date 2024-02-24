import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/navbar/navbar.component';
import { BlogModule } from './blog/blog.module';
import { BlogPost } from './models/blog-post.model';
import { GalleryModule } from './gallery/gallery.module';
//import { BlogService } from './blog/blog.service';

@Component({
    selector: 'travel-blog',
    standalone: true,
    imports: [CommonModule, RouterOutlet, BlogModule, GalleryModule, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    // items!: BlogPost[];
    // constructor(private blogService: BlogService) {}
    // ngOnInit(): void {
    //     this.blogService.getPosts().subscribe(
    //         (data: any) => {
    //             this.items = data;
    //         },
    //         (error: any) => {
    //             alert(error.message);
    //         }
    //     )
    // }
}
