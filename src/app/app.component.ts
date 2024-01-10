import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { BlogPost } from './shared/models/blog-post.model';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NavbarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    // blogPosts = [
    //   new BlogPost(1, "Testing", "Testing blog posts."),
    //   new BlogPost(2, "Hello, world!", "Hiya there!"),
    //   new BlogPost(3, "title", "text"),
    // ]
    title = 'mariusinbloom.wtf - My travel adventures!';
}
