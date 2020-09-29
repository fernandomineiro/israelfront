import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaspagadorasComponent } from './empresaspagadoras.component';

describe('EmpresaspagadorasComponent', () => {
  let component: EmpresaspagadorasComponent;
  let fixture: ComponentFixture<EmpresaspagadorasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaspagadorasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpresaspagadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
