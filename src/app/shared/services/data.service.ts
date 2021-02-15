import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { ErrorHandleService } from './handle.service';
import { catchError } from 'rxjs/operators';
import { Project, Thumbnail } from '../models/project';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private apiService: ApiService,
    private errorHandleService: ErrorHandleService,
  ) { }

  fetchThumbnailsHomePage(): Observable<Thumbnail[]> {
    return this.apiService.get<Project>('',
      `thumbnails/homepage`).pipe(
        catchError(err => this.errorHandleService.handleError(err)));
  }

  fetchThumbnailsWorkPage(): Observable<Thumbnail[]> {
    return this.apiService.get<Project>('',
      `thumbnails/workpage`).pipe(
        catchError(err => this.errorHandleService.handleError(err)));
  }

  fetchProjectDetails(projectId: string): Observable<Project> {
    return this.apiService.get<Project>('',
      `projectDetails/${projectId}`).pipe(
        catchError(err => this.errorHandleService.handleError(err)));
  }

  fetchPreviousProjectDetails(projectId: string): Observable<Project> {
    return this.apiService.get<Project>('',
      `projectDetails/prev/${projectId}`).pipe(
        catchError(err => this.errorHandleService.handleError(err)));
  }

  fetchNextProjectDetails(projectId: string): Observable<Project> {
    return this.apiService.get<Project>('',
      `projectDetails/next/${projectId}`).pipe(
        catchError(err => this.errorHandleService.handleError(err)));
  }

}
