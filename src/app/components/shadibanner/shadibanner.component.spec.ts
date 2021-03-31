import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquesbannerComponent } from './techosytabiquesbanner.component';

describe('techosytabiquesbannerComponent', () => {
  let component: techosytabiquesbannerComponent;
  let fixture: ComponentFixture<techosytabiquesbannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquesbannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquesbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
