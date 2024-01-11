import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './features/navbar/navbar.component';
import { BlogPost } from './models/blog/blog-post.model';

// ... other shared components

@NgModule({
    imports: [
        CommonModule,
        NavbarComponent,
        // ... other shared modules
    ],
    declarations: [
        //NavbarComponent,
        // ... other shared components
    ],
    exports: [
        NavbarComponent,
        // ... export shared components so they can be used in other modules
    ],
})
export class SharedModule {}
