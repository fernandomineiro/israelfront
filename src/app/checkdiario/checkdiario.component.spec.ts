import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckdiarioComponent } from './checkdiario.component';

describe('CheckdiarioComponent', () => {
  let component: CheckdiarioComponent;
  let fixture: ComponentFixture<CheckdiarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckdiarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckdiarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
