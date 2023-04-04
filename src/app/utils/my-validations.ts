import { AbstractControl } from "@angular/forms";

export class myValidations{

  static upperCaseLetter(control:AbstractControl){
    const value=control.value;
    if(value.match(/[A-Z]/g)){
      return {upperCaseLetter:true};
    }
    return null;
  }
}
