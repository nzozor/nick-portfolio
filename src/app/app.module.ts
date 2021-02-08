import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullscreenMenuComponent } from './components/fullscreen-menu/fullscreen-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { InitialsComponent } from './components/initials/initials.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullscreenMenuComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
