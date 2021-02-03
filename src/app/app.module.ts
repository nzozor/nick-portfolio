import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullscreenMenuComponent } from './components/fullscreen-menu/fullscreen-menu.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { PortfolioSectionComponent } from './components/portfolio-section/portfolio-section.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { SwiperModule } from 'swiper/angular';
import { ServicesComponent } from './components/services/services.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
import { FooterComponent } from './components/footer/footer.component';
import { InitialsComponent } from './components/initials/initials.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullscreenMenuComponent,
    HeroSectionComponent,
    PortfolioSectionComponent,
    ReviewsComponent,
    ServicesComponent,
    CallToActionComponent,
    FooterComponent,
    InitialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
