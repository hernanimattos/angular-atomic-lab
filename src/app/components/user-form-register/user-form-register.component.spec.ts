import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormRegisterComponent } from './user-form-register.component';

describe('UserRegisterComponent', () => {
  let component: UserFormRegisterComponent;
  let fixture: ComponentFixture<UserFormRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserFormRegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
