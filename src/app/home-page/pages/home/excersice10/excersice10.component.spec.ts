import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Excersice10Component } from './excersice10.component';

describe('Excersice10Component', () => {
  let component: Excersice10Component;
  let fixture: ComponentFixture<Excersice10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Excersice10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Excersice10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
