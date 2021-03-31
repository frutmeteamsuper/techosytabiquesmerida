import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquesstaticComponent } from './techosytabiquesstatic.component';

describe('techosytabiquesstaticComponent', () => {
  let component: techosytabiquesstaticComponent;
  let fixture: ComponentFixture<techosytabiquesstaticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquesstaticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquesstaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
