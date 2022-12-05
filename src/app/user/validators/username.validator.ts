import { Injectable } from "@angular/core";
import { AbstractControl, ValidationErrors } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class UsernameValidator {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value.trim() as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }

  // static ifUniqueEmail(control: AbstractControl): Promise<ValidationErrors | null> {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if (control.value.trim() === 'sauravvishal@globussoft.in') {
  //         console.log(control.value);
  //         resolve({ ifUniqueEmail: true });
  //       } else {
  //         console.log("not match");
  //         resolve(null);
  //       }
  //     }, 1000);
  //   });
  // }

}
