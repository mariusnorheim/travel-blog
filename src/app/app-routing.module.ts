import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./post/post.module').then((m) => m.PostModule),
    },
    {
        path: 'gallery',
        loadChildren: () =>
            import('./gallery/gallery.module').then((m) => m.GalleryModule),
    },
    {
        path: 'destinations',
        loadChildren: () =>
            import('./destination/destination.module').then((m) => m.DestinationModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
