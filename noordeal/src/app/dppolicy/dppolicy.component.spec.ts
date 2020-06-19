import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DppolicyComponent } from './dppolicy.component';

describe('DppolicyComponent', () => {
  let component: DppolicyComponent;
  let fixture: ComponentFixture<DppolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DppolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DppolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
