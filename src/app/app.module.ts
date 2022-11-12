import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedModule } from './feed/feed.module';
import { NavigationModule } from './navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NavigationModule,
    HttpClientModule,
    FeedModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
