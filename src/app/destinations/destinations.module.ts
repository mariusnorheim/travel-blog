import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DestinationsRoutingModule } from './destinations-routing.module';
import { DestinationsService } from './destinations.service';
// import { DestinationsListComponent } from './components/destinations-list/destinations-list.component';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        DestinationsRoutingModule,
        ButtonModule,
        MenuModule,
        PanelModule,
        PaginatorModule,
    ],
    providers: [DestinationsService],
    //exports: [DestinationsListComponent],
    bootstrap: [],
})
export class DestinationsModule {}
