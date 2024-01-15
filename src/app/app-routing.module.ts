import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'blog',
        loadChildren: () =>
            import('./blog/blog.module').then((m) => m.BlogModule),
    },
    //{ path: 'gallery', loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule) },
    //{ path: 'destinations', loadChildren: () => import('./destination/destination.module').then(m => m.DestinationModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
