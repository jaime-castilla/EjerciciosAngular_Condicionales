import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchEj2Component } from './switch-ej2.component';

describe('SwitchEj2Component', () => {
  let component: SwitchEj2Component;
  let fixture: ComponentFixture<SwitchEj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchEj2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchEj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
