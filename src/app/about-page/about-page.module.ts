import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutPageRoutingModule } from './about-page-routing.module';
import { AboutPageComponent } from './about-page.component';
import { JumbotronModule } from '../shared/modules/jumbotron/jumbotron.module';
import { CallToActionModule } from '../shared/modules/call-to-action/call-to-action.module';
import { ServicesComponent } from '../components/services/services.component';
import { ServicesModule } from '../shared/modules/services/services.module';
import { ParallaxModule } from '../shared/modules/parallax/parallax.module';

@NgModule({
  declarations: [AboutPageComponent],
  imports: [
    CommonModule,
    AboutPageRoutingModule,
    JumbotronModule,
    CallToActionModule,
    ServicesModule,
    ParallaxModule
  ]
})
export class AboutPageModule { }
