import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { techosytabiquesshopComponent } from './techosytabiquesshop.component';

describe('techosytabiquesshopComponent', () => {
  let component: techosytabiquesshopComponent;
  let fixture: ComponentFixture<techosytabiquesshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ techosytabiquesshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(techosytabiquesshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
