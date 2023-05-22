import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj9Component } from './condicionales-ej9.component';

describe('CondicionalesEj9Component', () => {
  let component: CondicionalesEj9Component;
  let fixture: ComponentFixture<CondicionalesEj9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj9Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
