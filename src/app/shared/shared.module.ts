import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogPost } from './models/blog-post.model';

// ... other shared components

@NgModule({
    declarations: [
        //NavbarComponent,
        // ... other shared components
    ],
    imports: [
        CommonModule,
        // ... other shared modules
    ],
    exports: [
        //NavbarComponent,
        // ... export shared components so they can be used in other modules
    ],
})
export class SharedModule {}
