import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, HostBinding, Output } from '@angular/core';

@Directive({
  selector: '[benoldiEnterViewport]'
})
export class EnterViewportDirective implements AfterViewInit {
  @Output() visibilityChange: EventEmitter<string> = new EventEmitter<string>();
  private _observer: IntersectionObserver;
  @HostBinding('class') elementVisibilityClass: string;

  constructor(@Host() private _elementRef: ElementRef) { }
  ngAfterViewInit(): void {
    const options = { root: null, rootMargin: "0px", threshold: 0.0 };
    this._observer = new IntersectionObserver(this._callback, options);
    if (this._observer) {
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
