import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordRenewalComponent } from './password-renewal.component';

describe('PasswordRenewalComponent', () => {
  let component: PasswordRenewalComponent;
  let fixture: ComponentFixture<PasswordRenewalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordRenewalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordRenewalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
