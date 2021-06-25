import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposantbarregaucheComponent } from './composantbarregauche.component';

describe('ComposantbarregaucheComponent', () => {
  let component: ComposantbarregaucheComponent;
  let fixture: ComponentFixture<ComposantbarregaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComposantbarregaucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposantbarregaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
