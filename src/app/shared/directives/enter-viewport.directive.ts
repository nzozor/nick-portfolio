import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, HostBinding, Inject, Output, PLATFORM_ID } from '@angular/core';

@Directive({
  selector: '[benoldiEnterViewport]'
})
export class EnterViewportDirective implements AfterViewInit {
  @Output() visibilityChange: EventEmitter<string> = new EventEmitter<string>();
  private _observer: IntersectionObserver;
  @HostBinding('class') elementVisibilityClass: string;

  constructor(@Host() private _elementRef: ElementRef, @Inject(PLATFORM_ID) private plateformId: {}) { }
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.plateformId)) {
      const options = { root: null, rootMargin: "0px", threshold: 0.0 };
      this._observer = new IntersectionObserver(this._callback, options);
      this._observer.observe(this._elementRef.nativeElement);
    }
  }

  ngOnDestroy() { this._observer.disconnect(); }

  private _callback = (entries: any) => {
    entries.forEach((entry: any) => {
      this.visibilityChange.emit(entry.isIntersecting ? 'visible' : 'hidden');
      this.elementVisibilityClass = entry.isIntersecting ? 'visible' : 'hidden';
    });
  }
}
