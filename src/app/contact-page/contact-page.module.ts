import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactPageRoutingModule } from './contact-page-routing.module';
import { ContactPageComponent } from './contact-page.component';
import { CallToActionModule } from '../shared/modules/call-to-action/call-to-action.module';


@NgModule({
  declarations: [ContactPageComponent],
  imports: [
    CommonModule,
    ContactPageRoutingModule,
    CallToActionModule,
  ]
})
export class ContactPageModule { }
