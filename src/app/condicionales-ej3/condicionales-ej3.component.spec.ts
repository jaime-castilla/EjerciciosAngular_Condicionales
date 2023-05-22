import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj3Component } from './condicionales-ej3.component';

describe('CondicionalesEj3Component', () => {
  let component: CondicionalesEj3Component;
  let fixture: ComponentFixture<CondicionalesEj3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
