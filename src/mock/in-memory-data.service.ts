import { Injectable } from '@angular/core';
import { getStatusText } from 'angular-in-memory-web-api';
import { RequestInfo, ResponseOptions } from 'angular-in-memory-web-api/interfaces';
import { Observable, of } from 'rxjs';
import { Project } from 'src/app/shared/models/project';
import { BENOLDI_PROJECTS } from './projects';

interface Response {
  status: number;
  header: any;
  url: string;
  body: any;
}

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDataService {
  createDb(): {} { return {}; }
  constructor() { }

  post(reqInfo: RequestInfo): void{
    if (reqInfo.collectionName === 'api/project-list/homepage') {

    }

    if (reqInfo.collectionName === 'api/project-list/work') {

    }
  }

  get(reqInfo: RequestInfo): Observable<any> {
    if (reqInfo.url === '/thumbnails/homepage') {
      return this.getHomePageThumbnails(reqInfo);
    }
    return of({});
  }

  private getHomePageThumbnails(reqInfo: RequestInfo): Observable<ResponseOptions> {
    const projects = BENOLDI_PROJECTS.slice(0, 9);
    const thumbnails = projects.map((project: Project) => ({
      projectName: project.projectName,
      thumbnailUrl: project.thumbnailUrl,
      imgAlt: project.imgAlt
    }));
    return reqInfo.utils.createResponse$((): ResponseOptions => {
      const options: ResponseOptions = {
        body: thumbnails,
        status: 200
      };
      return this.finishOptions(options, reqInfo);
    });


  }
  /////////// helpers ///////////////
  private finishOptions(options: ResponseOptions, { headers, url }: RequestInfo): ResponseOptions {
    options.statusText = getStatusText(options.status || 0);
    options.headers = headers;
    options.url = url;
    return options;
  }

}
