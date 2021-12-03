import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {  faGithub } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'benoldi-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document) { }
  showSnackBar = false;
  faGithub = faGithub;
  ngOnInit(): void {
  }

  copyToClipBoard(): void {
    const selBox = this.document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'nzozor@gmail.com';
    this.document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    this.document.execCommand('copy');
    this.document.body.removeChild(selBox);
    this.showSnackBarElement();
  }
  showSnackBarElement() {
    this.showSnackBar = true;
    setTimeout(() => this.showSnackBar = false, 3000);

  }
}
