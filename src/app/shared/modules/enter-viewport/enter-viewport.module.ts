import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterViewportDirective } from '../../directives/enter-viewport.directive';



@NgModule({
  declarations: [EnterViewportDirective],
  exports: [EnterViewportDirective],
  imports: [
    CommonModule
  ]
})
export class EnterViewportModule { }
