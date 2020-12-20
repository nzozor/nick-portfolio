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
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullscreenMenuComponent,
    HeroSectionComponent,
    PortfolioSectionComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
