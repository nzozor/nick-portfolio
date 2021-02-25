import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSectionComponent } from 'src/app/components/portfolio-section/portfolio-section.component';
import { EnterViewportDirective } from '../../directives/enter-viewport.directive';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [PortfolioSectionComponent,
     EnterViewportDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PortfolioSectionComponent]
})
export class PortfolioSectionModule { }
