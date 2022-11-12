import { Component, OnInit } from '@angular/core';
import { FeedService } from '../feed.service';
import { Activity } from '../types/activity.type';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  public activities: Activity[] = [];

  constructor(private feedService: FeedService) { }

  ngOnInit(): void {
    this.feedService.getActivities()
      .subscribe({
        next: (activities) => this.activities = activities,
        error: (e) => console.error(e),
        complete: () => console.info('completed')
      });
  }

}
