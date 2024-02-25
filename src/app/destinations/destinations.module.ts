import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsService } from './destinations.service';
import { DestinationsListComponent } from './components/destinations-list/destinations-list.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
    declarations: [DestinationsListComponent],
    imports: [
        CommonModule,
        DestinationsRoutingModule,
        ButtonModule,
        CardModule,
        MenuModule,
        PanelModule,
        PaginatorModule,
        TabViewModule,
        TimelineModule
    ],
    providers: [DestinationsService],
    exports: [DestinationsListComponent],
    bootstrap: [],
})
export class DestinationsModule {}
