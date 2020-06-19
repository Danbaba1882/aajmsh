import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredirComponent } from './storedir.component';

describe('StoredirComponent', () => {
  let component: StoredirComponent;
  let fixture: ComponentFixture<StoredirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
