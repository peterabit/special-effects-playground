import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCursorContainerComponent } from './custom-cursor-container.component';

describe('CustomCursorContainerComponent', () => {
  let component: CustomCursorContainerComponent;
  let fixture: ComponentFixture<CustomCursorContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomCursorContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCursorContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
