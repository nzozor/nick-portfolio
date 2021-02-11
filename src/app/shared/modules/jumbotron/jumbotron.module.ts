import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroSectionComponent } from 'src/app/components/hero-section/hero-section.component';
import { InitialsComponent } from 'src/app/components/initials/initials.component';



@NgModule({
  declarations: [
    HeroSectionComponent, InitialsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeroSectionComponent
  ]
})
export class JumbotronModule { }
