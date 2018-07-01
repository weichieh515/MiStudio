/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MaillistComponent } from './maillist.component';

describe('MaillistComponent', () => {
  let component: MaillistComponent;
  let fixture: ComponentFixture<MaillistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaillistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaillistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
