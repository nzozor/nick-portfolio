import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Thumbnail } from '../shared/models/project';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'benoldi-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.scss']
})
export class WorkPageComponent implements OnInit {

  thumbnails$: Observable<Thumbnail[]>;
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.thumbnails$ = this.dataService.fetchThumbnailsWorkPage();
  }
}
