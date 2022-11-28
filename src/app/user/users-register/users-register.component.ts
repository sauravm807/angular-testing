import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserService } from '../user.service';


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

  constructor(private userService: UserService) {
    this.createFrom();
  }

  ngOnInit(): void {
  }

  createFrom(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(this.user.name, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(this.user.email, [Validators.required, Validators.email]),
      password: new FormControl(this.user.password, Validators.required)
    });
  }

  onSubmit(): void {
    this.isSubmitted = true;
    this.userService.register(this.registerForm.value).subscribe({
      next: res => {
        console.log(res);
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
