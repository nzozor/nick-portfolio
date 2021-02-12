import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkPageRoutingModule } from './work-page-routing.module';
import { WorkPageComponent } from './work-page.component';


@NgModule({
  declarations: [WorkPageComponent],
  imports: [
    CommonModule,
    WorkPageRoutingModule
  ]
})
export class WorkPageModule { }
