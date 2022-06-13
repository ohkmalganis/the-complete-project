import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePromisesComponent } from './home-promises.component';

describe('HomePromisesComponent', () => {
  let component: HomePromisesComponent;
  let fixture: ComponentFixture<HomePromisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePromisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePromisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
