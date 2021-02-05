import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import SwiperCore, {
  Pagination,
   Navigation
} from 'swiper/core';
import { DOCUMENT } from '@angular/common';

SwiperCore.use([Pagination, Navigation]);

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
  // @ViewChild('swiper') swiper: any;
  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  // slideConfig = {"slidesToShow": 1, "slidesToScroll": 1};
  activeSlide = 0;
  slideCount = 0;
  visiblePanels = 1;
  sensitivity = 25;
  visibleContainerStyle = {};
  sliderMainContainerStyle = {};
  sliderWidth = 0;
  activeSliderWidth = 0;

  // sliderPanelstyle = {
  //   width: '250px'
  // };

  minHeight = 373;
  marginBetweenSlides = 10;
  totalSlideWidth = 0;
  stars = [1, 2, 3, 4, 5];
  innerWidth = 0;

  reviews = [
    {
      quote: 'I worked with Elsa on creating branding visuals such as logos designs and websites UI designs in the past, she listens to my needs, very responsive to feedback, always produced quality works. I would definitely work with her again.',
      reviewerName: 'Pauline Guo, Entrepreneur'
    },
    {
      reviewerName: 'Owner of Beauti Skin Clinic',
      quote: 'I can’t be happier with the job Elsa and her team did on my brand and website. She understood immediately my ideas and the needs of my business and created an elegant but user friendly website, which reflects completely the image of my clinic. The result of her work made my business to grow faster both in quantity and quality.'
    }
  ];


  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<div class=\'nav-btn next-slide\'></div>',
    prevArrow: '<div class=\'nav-btn prev-slide\'></div>',
    dots: true,
    infinite: true,
    centerMode: true,
    variableWidth: true,
    adaptiveHeight: true,
    focusOnSelect: false,
    touchThreshold: 1000,
    // touchMove: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          variableWidth: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  };

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit(): void {
  }


  slickInit(e: any): void {
    console.log('slick initialized');
  }

  breakpoint(e: any): void {
    console.log('breakpoint');
  }

  afterChange(e: any): void {
    console.log('afterChange');
  }

  beforeChange(e: any): void {
    console.log('beforeChange');
  }

  swipe(): void {
    setTimeout(() => {
      this.slickModal.slickGoTo(this.slickModal.currentIndex);
    }, 0);
  }

  slickGoTo(e: any): void {
    this.slickModal.slickGoTo(4);
  }

  next(): void {
    const el: any = this.document.querySelector('.swiper-container');
    el?.swiper.slideNext();
  }

  prev(): void {
    const el: any = this.document.querySelector('.swiper-container');
    el?.swiper.slidePrev();
  }

  onSwiper(swiper: Event): void {
  }

  onSlideChange(): void {
    console.log('slide change');
  }
}
