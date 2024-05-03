import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
    { path: '', component: PostListComponent }, // Route for blog post list
    { path: 'post/:id', component: PostDetailsComponent }, // Route for blog post details
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class PostRoutingModule {}
