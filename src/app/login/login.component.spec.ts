import { ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should restrict button if fields are empty and form is invalid', () => {
    component.loginForm.setValue({
      email: "",
      password: ""
    });
    expect(component.loginForm.valid).toBeFalsy();
    const buttonElem = fixture.debugElement.query(By.css('#submit-login-button'));
    const disabled = buttonElem.properties['disabled'];
    expect(disabled).toBeTruthy();
  });

  it('should have invalid form if email has invalid format', () => {
    component.loginForm.setValue({
      email: "admin",
      password: "123456"
    });
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should have invalid form if password\'s length is shorter than 6', () => {
    component.loginForm.setValue({
      email: "admin@email.com",
      password: "12345"
    });
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('should show error message if email or password are wrong after submitting', () => {
    component.loginForm.setValue({
      email: "admin@email.com",
      password: "123456"
    });
    expect(component.loginForm.valid).toBeTruthy();
    component.login();
    expect(component.showError).toBeTruthy();
    
    fixture.detectChanges();
    let compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-message')?.textContent).toContain(component.errorMessage);
  });

  it('should navigate to home page on successfull login', inject([Router], (mockRouter: Router) => {
    component.loginForm.setValue({
      email: "admin@email.com",
      password: "adminadmin"
    });
    expect(component.loginForm.valid).toBeTruthy();
    const spy = spyOn(mockRouter, 'navigate').and.stub();
    component.login();

    expect(spy.calls.first().args[0]).toContain('/home');    
  }));
});
