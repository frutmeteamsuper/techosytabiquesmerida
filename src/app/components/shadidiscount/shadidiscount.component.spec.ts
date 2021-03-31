import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquesdiscountComponent } from './techosytabiquesdiscount.component';

describe('techosytabiquesdiscountComponent', () => {
  let component: techosytabiquesdiscountComponent;
  let fixture: ComponentFixture<techosytabiquesdiscountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquesdiscountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquesdiscountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
