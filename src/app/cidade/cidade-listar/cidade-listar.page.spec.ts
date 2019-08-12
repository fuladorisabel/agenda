import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CidadeListarPage } from './cidade-listar.page';

describe('CidadeListarPage', () => {
  let component: CidadeListarPage;
  let fixture: ComponentFixture<CidadeListarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CidadeListarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CidadeListarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
