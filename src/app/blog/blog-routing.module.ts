import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostListComponent } from './blog-post-list/blog-post-list.component';
import { BlogPostDetailsComponent } from './blog-post-details/blog-post-details.component';

const routes: Routes = [
    { path: '', component: BlogPostListComponent }, // Route for blog post list
    { path: 'blog/:id', component: BlogPostDetailsComponent }, // Route for blog post details
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class BlogRoutingModule {}
