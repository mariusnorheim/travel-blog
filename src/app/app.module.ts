import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogService } from './services/blog/blog.service';
import { AppComponent } from './app.component';
// ... other core services

@NgModule({
    imports: [CommonModule, AppComponent],
    declarations: [],
    providers: [
        BlogService,
        // ... other services
    ],
    bootstrap: [],
})
export class AppModule {}
