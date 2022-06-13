import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxCallComponent } from './ngrx-call.component';

describe('NgrxCallComponent', () => {
  let component: NgrxCallComponent;
  let fixture: ComponentFixture<NgrxCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
