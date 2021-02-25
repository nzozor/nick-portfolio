import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'benoldi-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor() { }
  showSnackBar = false;
  ngOnInit(): void {
  }

  copyToClipBoard(): void {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'elsabenoldi@gmail.com';
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.showSnackBarElement();
  }
  showSnackBarElement() {
    this.showSnackBar = true;
    setTimeout(() => this.showSnackBar = false, 3000);

  }
}
