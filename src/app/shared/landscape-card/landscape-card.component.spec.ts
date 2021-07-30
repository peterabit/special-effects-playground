import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandscapeCardComponent } from './landscape-card.component';

describe('LandscapeCardComponent', () => {
  let component: LandscapeCardComponent;
  let fixture: ComponentFixture<LandscapeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandscapeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandscapeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
