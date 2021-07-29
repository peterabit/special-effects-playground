import { Component, OnInit } from '@angular/core';
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
        trigger: '.bg-block',
        pin: true,
        start: 'top top+=200px',
        end: '+=500',
        scrub: 1,
      },
    });

    this.mainTl.from('.box', { y: 300, ease: 'none' }).to('.box', { y: -300, ease: 'none' });
  }
}
