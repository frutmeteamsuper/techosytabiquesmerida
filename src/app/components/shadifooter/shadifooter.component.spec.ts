import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquesfooterComponent } from './techosytabiquesfooter.component';

describe('techosytabiquesfooterComponent', () => {
  let component: techosytabiquesfooterComponent;
  let fixture: ComponentFixture<techosytabiquesfooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquesfooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquesfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
