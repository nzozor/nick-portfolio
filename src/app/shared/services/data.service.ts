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

  fetchThumbnailsHomePage(): Observable<Thumbnail> {
    return this.apiService.get<Project>('',
      `thumbnails/homepage`).pipe(
        catchError(err => this.errorHandleService.handleError(err)));
  }

  // fetchThumbnailsHomePage(readRequest: any, paletteName: string): Observable<any> {
  //   return this.apiService.post<any>(
  //     '',
  //     `app/thumbnails/homepage`,
  //     readRequest).pipe(
  //       catchError(err => this.errorHandleService.handleError(err)));
  // }
}
