import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoListarPage } from './estado-listar.page';

describe('EstadoListarPage', () => {
  let component: EstadoListarPage;
  let fixture: ComponentFixture<EstadoListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoListarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
