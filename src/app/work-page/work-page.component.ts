import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Thumbnail } from '../shared/models/project';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'benoldi-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit, OnDestroy {

  thumbnails: Thumbnail[];
  sub: Subscription;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.sub = this.dataService.fetchThumbnailsWorkPage().subscribe(data =>  this.thumbnails = data);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
