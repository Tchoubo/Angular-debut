import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantpiedpageComponent } from './composantpiedpage.component';

describe('ComposantpiedpageComponent', () => {
  let component: ComposantpiedpageComponent;
  let fixture: ComponentFixture<ComposantpiedpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantpiedpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantpiedpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
