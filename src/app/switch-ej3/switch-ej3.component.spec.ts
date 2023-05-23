import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchEj3Component } from './switch-ej3.component';

describe('SwitchEj3Component', () => {
  let component: SwitchEj3Component;
  let fixture: ComponentFixture<SwitchEj3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchEj3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchEj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
