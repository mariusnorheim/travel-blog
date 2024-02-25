import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogService } from './blog.service';
import { BlogPostDetailsComponent } from './components/blog-post-details/blog-post-details.component';
import { BlogPostListComponent } from './components/blog-post-list/blog-post-list.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
    declarations: [BlogPostDetailsComponent, BlogPostListComponent],
    imports: [
        CommonModule,
        BlogRoutingModule,
        ButtonModule,
        CardModule,
        MenuModule,
        PanelModule,
        PaginatorModule,
    ],
    providers: [BlogService],
    exports: [BlogPostDetailsComponent, BlogPostListComponent],
    bootstrap: [],
})
export class BlogModule {}
