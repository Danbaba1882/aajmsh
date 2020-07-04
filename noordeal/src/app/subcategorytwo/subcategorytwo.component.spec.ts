import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategorytwoComponent } from './subcategorytwo.component';

describe('SubcategorytwoComponent', () => {
  let component: SubcategorytwoComponent;
  let fixture: ComponentFixture<SubcategorytwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategorytwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategorytwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
