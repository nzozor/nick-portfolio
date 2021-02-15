import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { GalleryImg, Project } from '../shared/models/project';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'benoldi-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
  project$: Observable<Project>;

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.project$ = this.dataService.fetchProjectDetails(id);
    this.dataService.fetchProjectDetails(id).subscribe(data => {
      console.log(data);
    });
  }

  imageTypeClass(item: GalleryImg): {} {
    return {
      large : item.type === 'full',
      half: item.type === 'half',
      vertical: item.type === 'vertical'
    };
  }
}
