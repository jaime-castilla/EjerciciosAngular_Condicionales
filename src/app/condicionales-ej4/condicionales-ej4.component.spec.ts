import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj4Component } from './condicionales-ej4.component';

describe('CondicionalesEj4Component', () => {
  let component: CondicionalesEj4Component;
  let fixture: ComponentFixture<CondicionalesEj4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
