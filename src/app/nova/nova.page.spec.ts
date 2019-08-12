import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaPage } from './nova.page';

describe('NovaPage', () => {
  let component: NovaPage;
  let fixture: ComponentFixture<NovaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
