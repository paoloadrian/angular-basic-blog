import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: string = 'Invalid email or password';
  showError: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('', [ Validators.email, Validators.required ] ),
    password: new FormControl('', [ Validators.minLength(6), Validators.required ])
  });

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.userService.userIsLoggedIn())
      this.router.navigate(['/home']);
  }

  login(): void {
    this.showError = false;
    const loginDetails = { ... this.loginForm.value };
    if (this.userService.login(loginDetails))
      this.router.navigate(['/home']);
    else
      this.showError = true;
  }

}
