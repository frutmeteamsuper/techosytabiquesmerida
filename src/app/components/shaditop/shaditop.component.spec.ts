import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquestopComponent } from './techosytabiquestop.component';

describe('techosytabiquestopComponent', () => {
  let component: techosytabiquestopComponent;
  let fixture: ComponentFixture<techosytabiquestopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquestopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquestopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
