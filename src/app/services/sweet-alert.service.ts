import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  private sweetAlertSetUp() {
    return Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  }

  sucess(message: string): void {
    const Toast = this.sweetAlertSetUp();
    Toast.fire({
      icon: 'success',
      title: message
    });
  }

  error(message: string): void {
    const Toast = this.sweetAlertSetUp();
    Toast.fire({
      icon: 'error',
      title: message
    })
  }

  warning(message: string): void {
    const Toast = this.sweetAlertSetUp();
    Toast.fire({
      icon: 'warning',
      title: message
    })
  }
}

