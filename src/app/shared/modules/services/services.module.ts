import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesComponent } from 'src/app/components/services/services.component';


@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule
  ],
  exports: [ServicesComponent]
})
export class ServicesModule { }
