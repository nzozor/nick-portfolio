import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandleService {

  constructor(
    public router: Router) { }

  handleError(error: HttpErrorResponse): Observable<any> {
    // output to console for debugger
    console.log(error);

    let errorMessage = 'Unknown error!';
    if (error.status) {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
      console.warn(errorMessage);
      if (error.status === 401 || error.status === 403) {

      } else if (error.status === 503) {

      } else {
        console.warn('Unable to perform this operation, please try later.',
          0, 'report_problem', true, 'error');
      }
    }

    return EMPTY;
  }
}
