import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquesbestsellerComponent } from './techosytabiquesbestseller.component';

describe('techosytabiquesbestsellerComponent', () => {
  let component: techosytabiquesbestsellerComponent;
  let fixture: ComponentFixture<techosytabiquesbestsellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquesbestsellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquesbestsellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
