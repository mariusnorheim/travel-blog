import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogService } from './blog/blog.service';
// ... other core services

@NgModule({
    imports: [CommonModule, AppRoutingModule, AppComponent],
    declarations: [],
    providers: [
        //BlogService,
        // ... other services
    ],
    bootstrap: [],
})
export class AppModule {}
