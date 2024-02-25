import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinationsListComponent } from './components/destinations-list/destinations-list.component';
//import { GalleryDetailsComponent } from './blog-post-details/blog-post-details.component';

const routes: Routes = [
    { path: '', component: DestinationsListComponent }, // Route for destinations list
    //{ path: ':id', component: DestinationsDetailsComponent }, // Route for destinations details
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class DestinationsRoutingModule {}
