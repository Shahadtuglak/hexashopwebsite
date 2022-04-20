import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleproductsComponent } from './singleproducts.component';

describe('SingleproductsComponent', () => {
  let component: SingleproductsComponent;
  let fixture: ComponentFixture<SingleproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
