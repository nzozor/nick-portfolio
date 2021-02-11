import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'benoldi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'elsa-website';
  faArrowUp = faArrowUp;
  showScrollTopButton = false;
  initialPos = 0;
  constructor(private viewportScroller: ViewportScroller) { }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    // In chrome and some browser scroll is given to body tag
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    if (!this.initialPos) {
      this.initialPos = pos;
    }
    if (pos > this.initialPos * 1.25) {
      this.showScrollTopButton = true;
    } else {
      this.showScrollTopButton = false;
    }
  }
  ngOnInit(): void {
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
