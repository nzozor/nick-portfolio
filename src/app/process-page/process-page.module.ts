import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessPageRoutingModule } from './process-page-routing.module';
import { ProcessPageComponent } from './process-page.component';
import { ParallaxModule } from '../shared/modules/parallax/parallax.module';
import { CallToActionModule } from '../shared/modules/call-to-action/call-to-action.module';

@NgModule({
  declarations: [ProcessPageComponent],
  imports: [
    CommonModule,
    ProcessPageRoutingModule,
    ParallaxModule,
    CallToActionModule,

  ]
})
export class ProcessPageModule { }
