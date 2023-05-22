import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj6Component } from './condicionales-ej6.component';

describe('CondicionalesEj6Component', () => {
  let component: CondicionalesEj6Component;
  let fixture: ComponentFixture<CondicionalesEj6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj6Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
