import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj8Component } from './condicionales-ej8.component';

describe('CondicionalesEj8Component', () => {
  let component: CondicionalesEj8Component;
  let fixture: ComponentFixture<CondicionalesEj8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj8Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
