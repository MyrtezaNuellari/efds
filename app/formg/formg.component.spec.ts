import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormgComponent } from './formg.component';

describe('FormgComponent', () => {
  let component: FormgComponent;
  let fixture: ComponentFixture<FormgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
