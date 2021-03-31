import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquescartComponent } from './techosytabiquescart.component';

describe('techosytabiquescartComponent', () => {
  let component: techosytabiquescartComponent;
  let fixture: ComponentFixture<techosytabiquescartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquescartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquescartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
