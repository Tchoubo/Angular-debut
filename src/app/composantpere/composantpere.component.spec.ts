import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantpereComponent } from './composantpere.component';

describe('ComposantpereComponent', () => {
  let component: ComposantpereComponent;
  let fixture: ComponentFixture<ComposantpereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantpereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantpereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
