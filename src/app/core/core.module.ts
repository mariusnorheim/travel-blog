import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogService } from './services/blog/blog.service';
// ... other core services

@NgModule({
    imports: [CommonModule],
    providers: [
        BlogService,
        // ... other services
    ],
})
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only',
            );
        }
    }
}
