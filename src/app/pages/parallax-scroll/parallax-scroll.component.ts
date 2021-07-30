import { Component } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-parallax-scroll',
  templateUrl: './parallax-scroll.component.html',
  styleUrls: ['./parallax-scroll.component.scss'],
})
export class ParallaxScrollComponent {
  mainTl?: GSAPTimeline;

  constructor() {}

  ngAfterViewInit(): void {
    this.mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.parallax-container',
        pin: true,
        start: 'top top-=200',
        end: '+=500',
        scrub: 1,
      },
    });

    this.mainTl.to('.parallax-bg', { y: -500 });
  }
}
