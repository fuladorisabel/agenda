import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeSalvarPage } from './cidade-salvar.page';

describe('CidadeSalvarPage', () => {
  let component: CidadeSalvarPage;
  let fixture: ComponentFixture<CidadeSalvarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeSalvarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeSalvarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
