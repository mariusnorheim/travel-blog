import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogService } from './blog.service';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    declarations: [BlogPostDetailsComponent, BlogPostListComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatIconModule,
        MatToolbarModule,
    ],
    providers: [BlogService],
    exports: [BlogPostDetailsComponent, BlogPostListComponent],
    bootstrap: [],
})
export class BlogModule {}
