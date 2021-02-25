import { isPlatformBrowser } from '@angular/common';
import { AfterContentInit, AfterViewInit, Directive, ElementRef, EventEmitter, Host, HostBinding, Inject, Output, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[benoldiEnterViewport]'
})
export class EnterViewportDirective implements AfterContentInit {
  @Output() visibilityChange: EventEmitter<string> = new EventEmitter<string>();
  private _observer: IntersectionObserver;
  @HostBinding('class') elementVisibilityClass: string;

  constructor(@Host() private _elementRef: ElementRef, @Inject(PLATFORM_ID) private plateformId: {}) { }
  ngAfterContentInit(): void {
    if (isPlatformBrowser(this.plateformId)) {
      const options = { root: null, rootMargin: "0px", threshold: 0.0 };
      this._observer = new IntersectionObserver(this._callback, options);
      this._observer.observe(this._elementRef.nativeElement);
      this.elementVisibilityClass = 'enter-view-port hidden';

    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.plateformId)) {
      this._observer.disconnect();
    }
  }

  private _callback = (entries: any) => {
      entries.forEach((entry: any) => {

        this.visibilityChange.emit(entry.isIntersecting ? 'enter-view-port visible' : 'enter-view-port hidden');
        this.elementVisibilityClass = entry.isIntersecting ? 'enter-view-port visible' : ' enter-view-port hidden';
      });
    }
}
