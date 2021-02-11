import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParallaxComponent } from '../../../components/parallax/parallax.component';



@NgModule({
  declarations: [ParallaxComponent],
  imports: [
    CommonModule,
  ],
  exports: [ParallaxComponent]
})
export class ParallaxModule { }
