import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GalleryImg, Project } from '../shared/models/project';
import { DataService } from '../shared/services/data.service';
import { Location } from '@angular/common';

@Component({
  selector: 'benoldi-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private dataService: DataService,
    private viewPortScroller: ViewportScroller) { }
  project: Project;
  projSub: Subscription;

  ngOnInit(): void {
    const currentProjectId = this.route.snapshot.params.id;
    this.projSub = this.dataService.fetchProjectDetails(currentProjectId).subscribe(project => this.project = project);
  }

  imageTypeClass(item: GalleryImg): {} {
    return {
      large: item.type === 'full',
      half: item.type === 'half',
    };
  }

  next(): void {
    this.dataService.fetchNextProjectDetails(this.project.projectId as string)
    .subscribe(data => {
      this.project = data; this.location.go(`project/${data.projectId}`);
    });
    this.scrollTop();
  }

  prev(): void {
    this.dataService.fetchPreviousProjectDetails(this.project.projectId as string)
      .subscribe(data => {
        this.project = data; this.location.go(`project/${data.projectId}`);
      });
    this.scrollTop();
  }

  private scrollTop(): void {
    this.viewPortScroller.scrollToPosition([0, 0]);
  }
}
