import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsCallComponent } from './rxjs-call.component';

describe('RxjsCallComponent', () => {
  let component: RxjsCallComponent;
  let fixture: ComponentFixture<RxjsCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
