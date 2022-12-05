import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { SweetAlertService } from '../services/sweet-alert.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  text:string = "Home-page"

  constructor(private sweetAlert: SweetAlertService) { }

  ngOnInit(): void {
  }

  onAlertSuccess() {
    this.sweetAlert.sucess("sign in successfully...");
  }

  onAlertError() {
    this.sweetAlert.error("sign in failed...");
  }

  onAlertWarning() {
    this.sweetAlert.warning("warning message...");
  }

  // onAlert1() {
  //   Swal.fire("simple alert");
  // }

  // onAlert2() {
  //   Swal.fire(
  //     'Good job!',
  //     'You clicked the button!',
  //     'success'
  //   )
  // }

  // onAlert3() {
  //   Swal.fire(
  //     'The Internet?',
  //     'That thing is still around?',
  //     'question'
  //   )
  // }

  // onAlert4() {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Something went wrong!',
  //     footer: '<a href="">Why do I have this issue?</a>'
  //   })
  // }

  // onAlert5() {
  //   Swal.fire({
  //     title: 'Do you want to save the changes?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'Save',
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     /* Read more about isConfirmed, isDenied below */
  //     if (result.isConfirmed) {
  //       Swal.fire('Saved!', '', 'success')
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info')
  //     }
  //   })
  // }
  // onAlert6() {
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'Your work has been saved',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  // }

  // onAlert7() {
  //   Swal.fire({
  //     title: 'Custom animation with Animate.css',
  //     showClass: {
  //       popup: 'animate__animated animate__fadeInDown'
  //     },
  //     hideClass: {
  //       popup: 'animate__animated animate__fadeOutUp'
  //     }
  //   })
  // }

  // onAlert8() {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!'
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       Swal.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     }
  //   })
  // }

  // onAlert9() {
  //   const swalWithBootstrapButtons = Swal.mixin({
  //     customClass: {
  //       confirmButton: 'btn btn-success',
  //       cancelButton: 'btn btn-danger'
  //     },
  //     buttonsStyling: false
  //   })

  //   swalWithBootstrapButtons.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     icon: 'warning',
  //     showCancelButton: true,
  //     confirmButtonText: 'Yes, delete it!',
  //     cancelButtonText: 'No, cancel!',
  //     reverseButtons: true
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       swalWithBootstrapButtons.fire(
  //         'Deleted!',
  //         'Your file has been deleted.',
  //         'success'
  //       )
  //     } else if (
  //       /* Read more about handling dismissals below */
  //       result.dismiss === Swal.DismissReason.cancel
  //     ) {
  //       swalWithBootstrapButtons.fire(
  //         'Cancelled',
  //         'Your imaginary file is safe :)',
  //         'error'
  //       )
  //     }
  //   })
  // }

  // onAlert10() {
  //   Swal.fire({
  //     title: 'Sweet!',
  //     text: 'Modal with a custom image.',
  //     imageUrl: 'https://unsplash.it/400/200',
  //     imageWidth: 400,
  //     imageHeight: 200,
  //     imageAlt: 'Custom image',
  //   })
  // }
}
