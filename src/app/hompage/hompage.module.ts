import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HompageRoutingModule } from './hompage-routing.module';
import { HompageComponent } from './hompage.component';
import { HeroSectionComponent } from '../components/hero-section/hero-section.component';
import { PortfolioSectionComponent } from '../components/portfolio-section/portfolio-section.component';
import { ServicesComponent } from '../components/services/services.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { SwiperModule } from 'swiper/angular';
import { CallToActionComponent } from '../components/call-to-action/call-to-action.component';
import { InitialsComponent } from '../components/initials/initials.component';

@NgModule({
  declarations: [HompageComponent,
    HeroSectionComponent,
    PortfolioSectionComponent,
    ServicesComponent,
    ReviewsComponent,
    CallToActionComponent,
    InitialsComponent
  ],
  imports: [
    CommonModule,
    HompageRoutingModule,
    SwiperModule
  ]
})
export class HompageModule { }
