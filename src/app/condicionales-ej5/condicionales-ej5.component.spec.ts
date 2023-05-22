import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj5Component } from './condicionales-ej5.component';

describe('CondicionalesEj5Component', () => {
  let component: CondicionalesEj5Component;
  let fixture: ComponentFixture<CondicionalesEj5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
