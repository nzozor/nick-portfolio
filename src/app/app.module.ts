import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullscreenMenuComponent } from './components/fullscreen-menu/fullscreen-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from 'src/mock/in-memory-data.service';
import { environment } from 'src/environments/environment';

const mockModules = [];
if (environment.mockdata) {
  mockModules.push(...[
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 0 }
    )
  ])
}
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FullscreenMenuComponent,
    FooterComponent,
    // EnterViewportDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ...mockModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
