import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkPageRoutingModule } from './work-page-routing.module';
import { WorkPageComponent } from './work-page.component';
import { PortfolioSectionModule } from '../shared/modules/portfolio-section/portfolio-section.module';
import { CallToActionModule } from '../shared/modules/call-to-action/call-to-action.module';


@NgModule({
  declarations: [WorkPageComponent],
  imports: [
    CommonModule,
    WorkPageRoutingModule,
    PortfolioSectionModule,
    CallToActionModule,
  ]
})
export class WorkPageModule { }
