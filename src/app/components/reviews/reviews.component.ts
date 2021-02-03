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
      quote: 'Really happy with my wax! Lovely venue, very clean and luxurious and my treatment was very professional. Would highly recommend.',
      reviewerName: 'Kate'
    },
    {
      reviewerName: 'Liz',
      quote: 'Such a professional and well run clinic. I have already made a follow up appointment. Cinzia was very knowledgeable about treatments and products without any hard sell. It was a lovely relaxing environment and I will be back. Thank you'
    },
    {
      reviewerName: 'Ruth',
      quote: 'There is nowhere I would trust more with my skin! I\'ve been coming here for about a year now and will continue. Cinza and her team are professional but also like my agony aunts!'
    },
    {
      reviewerName: 'WeiTing',
      quote: 'Cinzia was SO lovely. Walked into the salon, it smelled fab and the ambience was on point. My Hollywood laser treatment was as painless as it can be haha. Would definitely come back.'
    },
    {
      reviewerName: 'Kate',
      quote: 'Couldn\'t be bettered! Brilliant service, pleasant atmosphere, highly trained people who know their job!'
    },
    {
      reviewerName: 'Lucy',
      quote: 'Lovely manicure - clean salon and professional and very friendly staff',
    },
    {
      reviewerName: 'Miriam',
      quote: 'Best waxing I’ve had in London, I highly recommend Beauti!',
    },
    {
      reviewerName: 'Bethany',
      quote: 'Lovely staff and great atmosphere. Both treatments were perfect I’ll definitely be coming back',
    },
    {
      reviewerName: 'Nadia',
      quote: 'Brilliant and painless waxing - very chilled and Julia was perfect',
    },
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
