import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductlisterComponent } from './productlister.component';

describe('ProductlisterComponent', () => {
  let component: ProductlisterComponent;
  let fixture: ComponentFixture<ProductlisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductlisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductlisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
