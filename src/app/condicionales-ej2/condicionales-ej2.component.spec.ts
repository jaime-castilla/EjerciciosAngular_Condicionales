import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalesEj2Component } from './condicionales-ej2.component';

describe('CondicionalesEj2Component', () => {
  let component: CondicionalesEj2Component;
  let fixture: ComponentFixture<CondicionalesEj2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalesEj2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalesEj2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
