import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BlogService } from './blog/blog.service';
// ... other core services

@NgModule({
    imports: [CommonModule, AppRoutingModule, AppComponent, BrowserModule, BrowserAnimationsModule],
    declarations: [],
    providers: [
        //BlogService,
        // ... other services
    ],
    bootstrap: [],
})
export class AppModule {}
