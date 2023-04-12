import { AbstractControl } from "@angular/forms";

export class myValidations{

  static passwordChecker(control:AbstractControl){
    //const value=control.value;
    const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@?=.*&%$#]).{6,}$');
    const valid = regex.test(control.value);

    if(valid!=true){
      return {passwordChecker:true};
    }
    return null;
  }



}
