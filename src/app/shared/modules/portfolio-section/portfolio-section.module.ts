import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioSectionComponent } from 'src/app/components/portfolio-section/portfolio-section.component';



@NgModule({
  declarations: [PortfolioSectionComponent],
  imports: [
    CommonModule
  ],
  exports: [PortfolioSectionComponent]
})
export class PortfolioSectionModule { }
