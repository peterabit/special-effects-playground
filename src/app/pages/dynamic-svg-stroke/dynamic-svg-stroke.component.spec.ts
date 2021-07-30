import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicSvgStrokeComponent } from './dynamic-svg-stroke.component';

describe('DynamicSvgStrokeComponent', () => {
  let component: DynamicSvgStrokeComponent;
  let fixture: ComponentFixture<DynamicSvgStrokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicSvgStrokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicSvgStrokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
