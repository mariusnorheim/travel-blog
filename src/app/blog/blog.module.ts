import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogService } from './blog.service';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
    declarations: [BlogPostDetailsComponent, BlogPostListComponent],
    imports: [
        ButtonModule,
        CardModule,
        CommonModule,
        BlogRoutingModule,
    ],
    providers: [BlogService],
    exports: [BlogPostDetailsComponent, BlogPostListComponent],
    bootstrap: [],
})
export class BlogModule {}
