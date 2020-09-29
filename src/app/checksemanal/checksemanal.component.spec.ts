import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksemanalComponent } from './checksemanal.component';

describe('ChecksemanalComponent', () => {
  let component: ChecksemanalComponent;
  let fixture: ComponentFixture<ChecksemanalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksemanalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecksemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
