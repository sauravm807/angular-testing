import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { UsernameValidator } from '../validators/username.validator';
@Component({
  selector: 'app-users-register',
  templateUrl: './users-register.component.html',
  styleUrls: ['./users-register.component.css']
})
export class UsersRegisterComponent implements OnInit {

  text: string = 'Register';
  isSubmitted: boolean = false;
  user: User = {
    name: "",
    email: "",
    password: "",
    id: undefined
  };
  registerForm!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private sweetAlert: SweetAlertService
  ) {
    this.createFrom();
  }

  ngOnInit(): void { }

  createFrom(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3),
        UsernameValidator.cannotContainSpace
      ]),
      email: new FormControl(this.user.email, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.user.password, [Validators.required, Validators.minLength(3)])
    });
  }

  get name() {
    return this.registerForm.get('name');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }

  onSubmit(): void {
    if (!this.registerForm.valid) {
      this.sweetAlert.error("Register Form is invalid.");
      return;
    }
    this.isSubmitted = true;
    this.userService.register(this.registerForm.value).subscribe({
      next: res => {
        this.router.navigate(["/user/list"]);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
