import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationRoutingModule } from './destination-routing.module';
import { DestinationService } from './destination.service';
import { DestinationListComponent } from './components/destination-list/destination-list.component';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';

@NgModule({
    declarations: [DestinationListComponent],
    imports: [
        CommonModule,
        DestinationRoutingModule,
        ButtonModule,
        CardModule,
        MenuModule,
        PanelModule,
        PaginatorModule,
        TabViewModule,
        TimelineModule,
    ],
    providers: [DestinationService],
    exports: [DestinationListComponent],
    bootstrap: [],
})
export class DestinationModule {}
