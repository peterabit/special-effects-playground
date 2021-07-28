import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursorLocatorComponent } from './cursor-locator.component';

describe('CursorLocatorComponent', () => {
  let component: CursorLocatorComponent;
  let fixture: ComponentFixture<CursorLocatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursorLocatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursorLocatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
