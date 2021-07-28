import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RingCursorComponent } from './ring-cursor.component';

describe('RingCursorComponent', () => {
  let component: RingCursorComponent;
  let fixture: ComponentFixture<RingCursorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RingCursorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RingCursorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
