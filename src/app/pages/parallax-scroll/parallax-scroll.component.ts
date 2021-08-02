import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-parallax-scroll',
  templateUrl: './parallax-scroll.component.html',
  styleUrls: ['./parallax-scroll.component.scss'],
})
export class ParallaxScrollComponent implements AfterViewInit, OnDestroy {
  mainTl?: GSAPTimeline;

  constructor() {}

  ngAfterViewInit(): void {
    const mainTl = gsap.timeline();

    const screens = document.querySelectorAll('.slide-cover-screen');

    screens.forEach((screen, i) => {
      const bg = screen.querySelector('.slide-cover-bg');

      if (i === 0) {
        mainTl.to(bg, {
          y: (screen as HTMLElement).offsetHeight * 0.8,
          ease: 'none',
          scrollTrigger: {
            trigger: screen,
            scroller: '.scroll-container',
            start: 'top top',
            end: 'bottom top',
            scrub: 0,
          },
        });
      } else {
        mainTl.fromTo(
          bg,
          {
            y: -(screen as HTMLElement).offsetHeight * 0.8,
            ease: 'none',
            scrollTrigger: {
              trigger: screen,
              scroller: '.scroll-container',
              scrub: 0,
            },
          },
          {
            y: (screen as HTMLElement).offsetHeight * 0.8,
            ease: 'none',
            scrollTrigger: {
              trigger: screen,
              scroller: '.scroll-container',
              scrub: 0,
            },
          }
        );
      }
    });
  }

  ngOnDestroy(): void {
    this.mainTl?.kill();
  }
}
