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
  projects: Project[];
  createDb(): {} { return {}; }
  constructor() {
    this.projects = BENOLDI_PROJECTS;
   }

  get(reqInfo: RequestInfo): Observable<ResponseOptions> {
    if (reqInfo.url.includes('/thumbnails/homepage')) {
      return this.getHomePageThumbnails(reqInfo);
    }

    if (reqInfo.url.includes('/thumbnails/workpage')) {
      return this.getWorkThumbnails(reqInfo);
    }

    if (reqInfo.url.includes('/projectDetails/next')) {
      return this.getNextProjectDetails(reqInfo);
    }

    if (reqInfo.url.includes('/projectDetails/prev')) {
      return this.getPrevProjectDetails(reqInfo);
    }

    if (reqInfo.url.includes('/projectDetails')) {
      return this.getProjectDetails(reqInfo);
    }
    return of({});
  }

  private getPrevProjectDetails(reqInfo: RequestInfo): Observable<ResponseOptions> {
    const params = reqInfo.url.split('/');
    const lastUrlParams = params[params.length - 1];
    const projectDetails = this.projects.filter(project => project.projectId === lastUrlParams)[0];
    const projectIndex = this.projects.findIndex(project => project.projectId === projectDetails.projectId);
    let prevProject: Project;
    if (projectIndex - 1 < 0) {
      prevProject = this.projects[this.projects.length - 1];
    } else {
      prevProject = this.projects[projectIndex - 1];
    }
    return reqInfo.utils.createResponse$((): ResponseOptions => {
      const options: ResponseOptions = {
        body: prevProject,
        status: 200
      };
      return this.finishOptions(options, reqInfo);
    });
  }

  private getNextProjectDetails(reqInfo: RequestInfo): Observable<ResponseOptions> {
    const params = reqInfo.url.split('/');
    const lastUrlParams = params[params.length - 1];
    const projectDetails = this.projects.filter(project => project.projectId === lastUrlParams)[0];
    const projectIndex = this.projects.findIndex(project => project.projectId === projectDetails.projectId);
    let nextProject: Project;
    if (projectIndex + 1 > this.projects.length - 1) {
      nextProject = this.projects[0];
    } else {
      nextProject = this.projects[projectIndex + 1];
    }
    return reqInfo.utils.createResponse$((): ResponseOptions => {
      const options: ResponseOptions = {
        body: nextProject,
        status: 200
      };
      return this.finishOptions(options, reqInfo);
    });
  }

  private getProjectDetails(reqInfo: RequestInfo): Observable<ResponseOptions> {
    const params = reqInfo.url.split('/');
    const lastUrlParams = params[params.length - 1];
    const projectDetails = this.projects.filter(project => project.projectId === lastUrlParams)[0];
    return reqInfo.utils.createResponse$((): ResponseOptions => {
      const options: ResponseOptions = {
        body: projectDetails,
        status: 200
      };
      return this.finishOptions(options, reqInfo);
    });
  }
  private getWorkThumbnails(reqInfo: RequestInfo): Observable<ResponseOptions> {
    const thumbnails = this.projects.map((project: Project) => ({
      projectName: project.projectName,
      thumbnailUrlLarge: project.thumbnailUrlLarge,
      thumbnailUrlSmall: project.thumbnailUrlSmall,
      imgAlt: project.imgAlt,
      projectId: project.projectId
    }));
    return reqInfo.utils.createResponse$((): ResponseOptions => {
      const options: ResponseOptions = {
        body: thumbnails,
        status: 200
      };
      return this.finishOptions(options, reqInfo);
    });
  }

  private getHomePageThumbnails(reqInfo: RequestInfo): Observable<ResponseOptions> {
    const projects = this.projects.slice(0, 9);
    const thumbnails = projects.map((project: Project) => ({
      thumbnailUrlLarge: project.thumbnailUrlLarge,
      thumbnailUrlSmall: project.thumbnailUrlSmall,
      imgAlt: project.imgAlt,
      projectId: project.projectId,
      projectName: project.projectName
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
