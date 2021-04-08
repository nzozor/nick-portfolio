import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {
  Pagination,
} from 'swiper/core';
import { DOCUMENT } from '@angular/common';

SwiperCore.use([Pagination]);

@Component({
  selector: 'benoldi-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  @ViewChild('sliderEl') sliderEl: ElementRef;
  @ViewChild('start') start: ElementRef;
  @ViewChild('slickModal') slickModal: any;
  @ViewChild('carousel') myCarousel: any;

  reviews = [
    {
      reviewerName: 'Irina Litvinova, Marketing Consultant',
      quote : 'I’ve been working closely with Elsa for 4 branding projects already and I can highly recommend her as a graphic designer and creative marketing expert. Elsa has an excellent eye for details and great communication skills which makes the work on the project going smooth and efficient. Elsa is great in incorporating current visual trends, brand identity and company’s values so it all strengthens the brand.'
    },
    {
      quote : 'It is an absolute joy to work with Elsa. She has a keen eye for design and is most efficient, even when working under extreme pressure. She is most reliable and promptly addresses any issues that may arise in a creative and constructive manner. I cannot recommend her highly enough!',
      reviewerName: 'Flavia Frigeri, Art Historian and Curator'
    },
    {
      reviewerName: 'Owner of Beauti Skin Clinic',
      quote: 'I can’t be happier with the job Elsa and her team did on my brand and website. She understood immediately my ideas and the needs of my business and created an elegant but user friendly website, which reflects completely the image of my clinic. The result of her work made my business to grow faster both in quantity and quality.'
    },
    {
      quote: 'I worked with Elsa on creating branding visuals such as logos designs and websites UI designs in the past, she listens to my needs, very responsive to feedback, always produced quality works. I would definitely work with her again.',
      reviewerName: 'Pauline Guo, Entrepreneur'
    },
  ];

  constructor(@Inject(DOCUMENT) private document: Document) { }
  ngOnInit(): void {
  }

  next(): void {
    const el: any = this.document.querySelector('.swiper-container');
    el?.swiper.slideNext();
  }

  prev(): void {
    const el: any = this.document.querySelector('.swiper-container');
    el?.swiper.slidePrev();
  }
}
