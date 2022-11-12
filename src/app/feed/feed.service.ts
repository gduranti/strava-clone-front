import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Activity } from './types/activity.type';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  protected url: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  getActivities(): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(this.url + "activities-feed");
  }

}
