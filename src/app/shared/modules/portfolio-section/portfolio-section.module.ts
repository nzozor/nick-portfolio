import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSectionComponent } from 'src/app/components/portfolio-section/portfolio-section.component';
import { EnterViewportDirective } from '../../directives/enter-viewport.directive';



@NgModule({
  declarations: [PortfolioSectionComponent,
     EnterViewportDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [PortfolioSectionComponent]
})
export class PortfolioSectionModule { }
