import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj1Component } from './condicionales-ej1.component';

describe('CondicionalesEj1Component', () => {
  let component: CondicionalesEj1Component;
  let fixture: ComponentFixture<CondicionalesEj1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
