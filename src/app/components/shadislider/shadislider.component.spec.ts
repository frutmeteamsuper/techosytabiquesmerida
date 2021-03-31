import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquessliderComponent } from './techosytabiquesslider.component';

describe('techosytabiquessliderComponent', () => {
  let component: techosytabiquessliderComponent;
  let fixture: ComponentFixture<techosytabiquessliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquessliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquessliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
