import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCatComponent } from './add-new-cat.component';

describe('AddNewCatComponent', () => {
  let component: AddNewCatComponent;
  let fixture: ComponentFixture<AddNewCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
