import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { homepageRoutingModule } from './homepage-routing.module';
import { homepageComponent } from './homepage.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { JumbotronModule } from '../shared/modules/jumbotron/jumbotron.module';
import { CallToActionModule } from '../shared/modules/call-to-action/call-to-action.module';
import { ServicesModule } from '../shared/modules/services/services.module';
import { PortfolioSectionModule } from '../shared/modules/portfolio-section/portfolio-section.module';
import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    homepageComponent,
    ReviewsComponent,
  ],
  imports: [
    CommonModule,
    homepageRoutingModule,
    NgxUsefulSwiperModule,
    JumbotronModule,
    CallToActionModule,
    ServicesModule,
    PortfolioSectionModule
  ]
})
export class HomepageModule { }
