import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxScrollComponent } from './parallax-scroll.component';

describe('ParallaxScrollComponent', () => {
  let component: ParallaxScrollComponent;
  let fixture: ComponentFixture<ParallaxScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParallaxScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParallaxScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
