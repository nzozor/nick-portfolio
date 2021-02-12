import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkPageRoutingModule } from './work-page-routing.module';
import { WorkPageComponent } from './work-page.component';
import { PortfolioSectionModule } from '../shared/modules/portfolio-section/portfolio-section.module';


@NgModule({
  declarations: [WorkPageComponent],
  imports: [
    CommonModule,
    WorkPageRoutingModule,
    PortfolioSectionModule
  ]
})
export class WorkPageModule { }
