import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './features/navbar/navbar.component';

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
    providers: [],
    exports: [
        NavbarComponent,
        // ... export shared components so they can be used in other modules
    ],
    bootstrap: [],
})
export class SharedModule {}
