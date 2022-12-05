import { Component } from '@angular/core';
import { UserService } from './user/user.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService: UserService) {
    const userData = this.userService.getUserDataLocal();
    if (userData?.isLogin) {
      this.userService.isLoggedInSubject.next(true);
    }
  }
}
