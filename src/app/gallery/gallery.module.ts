import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryRoutingModule } from './gallery-routing.module';
import { GalleryService } from './gallery.service';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
    declarations: [GalleryListComponent],
    imports: [
        CommonModule,
        GalleryRoutingModule,
        ButtonModule,
        PanelModule,
        PaginatorModule,
    ],
    providers: [GalleryService],
    exports: [GalleryListComponent],
    bootstrap: [],
})
export class GalleryModule {}
