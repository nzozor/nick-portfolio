import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'elsa-website';
  faArrowUp = faArrowUp;
  showScrollTopButton = false;
  initialPos = 0;
  constructor(private viewportScroller: ViewportScroller, private renderer2: Renderer2) { }
  @HostListener("window:scroll", ["$event"])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    if (!this.initialPos) {
      this.initialPos = pos;
    }
    if (pos > this.initialPos * 1.25) {
      this.showScrollTopButton = true;
    } else {
      this.showScrollTopButton = false;
    }
  }
  ngOnInit() {
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
