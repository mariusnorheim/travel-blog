import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListComponent } from './components/gallery-list/gallery-list.component';
//import { GalleryDetailsComponent } from './blog-post-details/blog-post-details.component';

const routes: Routes = [
    { path: '', component: GalleryListComponent }, // Route for gallery list
    //{ path: ':id', component: GalleryDetailsComponent }, // Route for gallery details
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GalleryRoutingModule {}
