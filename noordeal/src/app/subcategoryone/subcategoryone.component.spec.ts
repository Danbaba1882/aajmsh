import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcategoryoneComponent } from './subcategoryone.component';

describe('SubcategoryoneComponent', () => {
  let component: SubcategoryoneComponent;
  let fixture: ComponentFixture<SubcategoryoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcategoryoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcategoryoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
