import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessage, UserLogin } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.css']
})
export class UsersLoginComponent implements OnInit {

  text: string = 'Login';
  isSubmitted: boolean = false;
  user: UserLogin = {
    email: "",
    password: ""
  };
  loginForm!: FormGroup;

  constructor(private userService: UserService, private router: Router) {
    this.createFrom();
  }

  ngOnInit(): void {
  }

  createFrom(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      password: new FormControl(this.user.password, Validators.required)
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    const response: ErrorMessage = this.userService.login(this.loginForm.value);
    alert(response.message);
    if (response.sucess) this.router.navigate(["/user/list"]);
  }
}
