/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainBodyComponent } from './main-body.component';
import {AlertComponent} from "../alert/alert.component";

describe('MainBodyComponent', () => {
  let component: MainBodyComponent;
  let fixture: ComponentFixture<MainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyComponent, AlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
