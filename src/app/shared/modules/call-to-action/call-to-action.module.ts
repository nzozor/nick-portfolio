import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallToActionComponent } from 'src/app/components/call-to-action/call-to-action.component';



@NgModule({
  declarations: [CallToActionComponent],
  imports: [
    CommonModule
  ],
  exports: [CallToActionComponent]
})
export class CallToActionModule { }
