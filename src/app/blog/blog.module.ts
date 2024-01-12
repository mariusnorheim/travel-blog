import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogService } from './blog.service';

@NgModule({
    imports: [BlogPostDetailsComponent, BlogPostListComponent, CommonModule],
    declarations: [],
    providers: [BlogService],
    exports: [],
    bootstrap: [],
})
export class BlogModule {}
