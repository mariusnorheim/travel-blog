import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./blog/blog.module').then((m) => m.BlogModule),
    },
    {
        path: 'gallery',
        loadChildren: () =>
            import('./gallery/gallery.module').then((m) => m.GalleryModule),
    },
    {
        path: 'destinations',
        loadChildren: () =>
            import('./destinations/destinations.module').then(
                (m) => m.DestinationsModule,
            ),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
