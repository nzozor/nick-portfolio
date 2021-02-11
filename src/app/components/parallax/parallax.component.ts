import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, HostListener, Inject, Input, OnInit } from '@angular/core';
import { BackgroudSettings  } from 'src/app/shared/models/backgroundPosition';

@Component({
  selector: 'benoldi-parallax',
  templateUrl: './parallax.component.html',
  styleUrls: ['./parallax.component.scss']
})
export class ParallaxComponent implements OnInit, AfterViewInit {
  @Input() imgUrl: string;
  @Input() backgroundSettings: BackgroudSettings;
  initialTop: number;
  parallaxDiv: HTMLDivElement;
  scrollY: number;
  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.parallaxDiv = this.document.querySelector('.parallax') as HTMLDivElement;
    this.parallaxDiv.style.backgroundPositionY = this.backgroundSettings.positionY + 'px';
    this.initialTop = parseInt(this.parallaxDiv.style.backgroundPositionY, 10);
    this.parallaxDiv.style.height = this.backgroundSettings.height + 'vh';
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    if (window.innerWidth > 600) {
      // console.log(window.scrollY);
      // this.parallaxDiv.style.backgroundPositionY = this.initialTop - window.scrollY * 1.2 + 'px';
      // this.parallaxDiv.style.backgroundPositionY = (this.initialTop -  500) +  'px';

    }
  }
}
