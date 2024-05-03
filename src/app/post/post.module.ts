import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostService } from './post.service';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
    declarations: [PostDetailsComponent, PostListComponent],
    imports: [
        CommonModule,
        PostRoutingModule,
        ButtonModule,
        CardModule,
        MenuModule,
        PanelModule,
        PaginatorModule,
    ],
    providers: [PostService],
    exports: [PostDetailsComponent, PostListComponent],
    bootstrap: [],
})
export class PostModule {}
