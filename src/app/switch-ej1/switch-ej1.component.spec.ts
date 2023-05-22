import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchEj1Component } from './switch-ej1.component';

describe('SwitchEj1Component', () => {
  let component: SwitchEj1Component;
  let fixture: ComponentFixture<SwitchEj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchEj1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchEj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
