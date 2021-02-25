import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectPageRoutingModule } from './project-page-routing.module';
import { ProjectPageComponent } from './project-page.component';
import { JumbotronModule } from '../shared/modules/jumbotron/jumbotron.module';
import { EnterViewportModule } from '../shared/modules/enter-viewport/enter-viewport.module';


@NgModule({
  declarations: [ProjectPageComponent],
  imports: [
    CommonModule,
    ProjectPageRoutingModule,
    JumbotronModule,
    EnterViewportModule
  ]
})
export class ProjectPageModule { }
