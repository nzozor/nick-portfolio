import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit, Renderer2 } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { filter} from 'rxjs/operators';

@Component({
  selector: 'benoldi-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  title = 'nick-website';
  faArrowUp = faArrowUp;
  showScrollTopButton = false;
  initialPos = 0;
  isContactPage = false;
  constructor(private viewportScroller: ViewportScroller,private router: Router ) { }
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
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(res => {
      if (this.router.url === '/contact') {
        this.isContactPage = true;
      } else {
        this.isContactPage = false;
      }
    });
  }

  onClickScroll(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
