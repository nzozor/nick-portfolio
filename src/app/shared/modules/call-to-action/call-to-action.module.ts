import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallToActionComponent } from 'src/app/components/call-to-action/call-to-action.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CallToActionComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [CallToActionComponent]
})
export class CallToActionModule { }
