import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSectionComponent } from 'src/app/components/portfolio-section/portfolio-section.component';
import { EnterViewportDirective } from '../../directives/enter-viewport.directive';
import { RouterModule } from '@angular/router';
import { EnterViewportModule } from '../enter-viewport/enter-viewport.module';



@NgModule({
  declarations: [PortfolioSectionComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    EnterViewportModule
  ],
  exports: [PortfolioSectionComponent]
})
export class PortfolioSectionModule { }
