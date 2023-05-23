import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchEj4Component } from './switch-ej4.component';

describe('SwitchEj4Component', () => {
  let component: SwitchEj4Component;
  let fixture: ComponentFixture<SwitchEj4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchEj4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwitchEj4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
