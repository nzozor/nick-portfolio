import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GalleryImg, Project } from '../shared/models/project';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'benoldi-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService, private viewPortScroller: ViewportScroller) { }
  project$: Observable<Project>;
  nextProject$: Observable<Project>;
  prevProject$: Observable<Project>;

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.project$ = this.dataService.fetchProjectDetails(id)  ;
    this.prevProject$ = this.dataService.fetchPreviousProjectDetails(id);
    this.nextProject$ = this.dataService.fetchNextProjectDetails(id);
  }

  imageTypeClass(item: GalleryImg): {} {
    return {
      large : item.type === 'full',
      half: item.type === 'half',
    };
  }

  next(): void {
    this.project$ = this.nextProject$;
    this.scrollTop();
  }

  prev(): void {
    this.project$ = this.prevProject$;
    this.scrollTop();
  }

  private scrollTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
