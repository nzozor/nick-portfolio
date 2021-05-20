import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryImg, Project } from '../shared/models/project';
import { DataService } from '../shared/services/data.service';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'benoldi-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit, OnDestroy {

  constructor(
    public location: Location,
    private route: ActivatedRoute,
    private dataService: DataService,
    private viewPortScroller: ViewportScroller) { }
  project: Project;
  projSub: Subscription;

  get assetsUrl(): string {
    return this.dataService.getAssetsUrl();
  }

  ngOnInit(): void {
    const currentProjectId = this.route.snapshot.params.id;
    this.projSub = this.dataService.fetchProjectDetails(currentProjectId).subscribe(project => {
      this.project = project;
    });
  }

  ngOnDestroy(): void {
    if (this.projSub) {
      this.projSub.unsubscribe();
    }
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
