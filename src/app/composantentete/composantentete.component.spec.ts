import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantenteteComponent } from './composantentete.component';

describe('ComposantenteteComponent', () => {
  let component: ComposantenteteComponent;
  let fixture: ComponentFixture<ComposantenteteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantenteteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantenteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
