import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed-dash/feed.component';
import { FeedService } from './feed.service';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    FeedService
  ]
})
export class FeedModule { }
