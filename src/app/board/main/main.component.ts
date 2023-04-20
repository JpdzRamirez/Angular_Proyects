import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { myValidations } from '../../utils/my-validations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public user;

  constructor(private fb:FormBuilder){
    this.user  = this.fb.group({
      user:fb.control('',[Validators.required, Validators.minLength(6)]),
      password:fb.control('',[Validators.required,myValidations.passwordChecker]),
  });
  }
  public submit(form:Form){

  }
}
