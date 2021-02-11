import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homepageRoutingModule } from './homepage-routing.module';
import { homepageComponent } from './homepage.component';
import { PortfolioSectionComponent } from '../components/portfolio-section/portfolio-section.component';
import { ServicesComponent } from '../components/services/services.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { SwiperModule } from 'swiper/angular';
import { CallToActionComponent } from '../components/call-to-action/call-to-action.component';
import { JumbotronModule } from '../shared/modules/jumbotron/jumbotron.module';
import { CallToActionModule } from '../shared/modules/call-to-action/call-to-action.module';
import { ServicesModule } from '../shared/modules/services/services.module';

@NgModule({
  declarations: [
    homepageComponent,
    PortfolioSectionComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    homepageRoutingModule,
    SwiperModule,
    JumbotronModule,
    CallToActionModule,
    ServicesModule
  ]
})
export class HomepageModule { }
