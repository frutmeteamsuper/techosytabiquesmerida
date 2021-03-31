import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquesmostwantedComponent } from './techosytabiquesmostwanted.component';

describe('techosytabiquesmostwantedComponent', () => {
  let component: techosytabiquesmostwantedComponent;
  let fixture: ComponentFixture<techosytabiquesmostwantedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquesmostwantedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquesmostwantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
