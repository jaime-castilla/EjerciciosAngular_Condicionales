import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj7Component } from './condicionales-ej7.component';

describe('CondicionalesEj7Component', () => {
  let component: CondicionalesEj7Component;
  let fixture: ComponentFixture<CondicionalesEj7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj7Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
