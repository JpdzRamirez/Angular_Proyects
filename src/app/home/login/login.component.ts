import { Component, ElementRef,Input,
OnInit, ViewChild,AfterViewInit,AfterContentInit, Renderer2 } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';

import { myValidations } from 'src/app/utils/my-validations';
import { myfunctionsService } from 'src/app/utils/my-functions';

@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit,AfterContentInit{


  //DOOM ELEMENT CHILD ACCESS
  @ViewChild('userValidation', {static: false})userInput:ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('passwordValidation', {static: false})passwordInput:ElementRef<HTMLInputElement> = {} as ElementRef;

  @ViewChild('length', {static: false})lengthInput:ElementRef<HTMLInputElement>={} as ElementRef;
  @ViewChild('lower', {static: false})lowerInput:ElementRef<HTMLInputElement>={} as ElementRef;
  @ViewChild('capital', {static: false})capitalInput:ElementRef<HTMLInputElement>={} as ElementRef;
  @ViewChild('number', {static: false})numberInput:ElementRef<HTMLInputElement>={} as ElementRef;
  @ViewChild('special', {static: false})specialInput:ElementRef<HTMLInputElement>={} as ElementRef;


  public form;
  public hide=true;

  // inyectable dependency
  constructor(private renderer2:Renderer2,private fb:FormBuilder,private tempo:myfunctionsService){

      this.form  = this.fb.group({
            user:['',[Validators.required, Validators.minLength(6)]],
            password:['',[Validators.required,myValidations.passwordChecker]]
        });
    }

      //close spinner
      ngAfterContentInit(): void {
      }
      //open spinner
      ngOnInit(){

      }

      ngAfterViewInit() {
      }

      public updateClassUserField(parametro:any):any{
        return{
          'validationDiv_disabled':parametro.length ==0,
          'validationDiv_enabled':parametro.length >0
          }
      }
      public onChangesUserField(){
        //si existen registros en user input
        const asUserElement=this.userInput.nativeElement;

        if(this.form.controls['user'].value!=""){
          this.tempo.hideHtmlElement(asUserElement,true);
          //this.hideElementHtml(asUserElement,true);
        }else{
          this.tempo.hideHtmlElement(asUserElement,false);
        }
      }

    ingresar(){
      if (this.form.valid){
        console.log("Todos los datos son válidos");
      }
        else{
          console.log("Hay datos inválidos en el formulario");
        }
    }
    registrar(){
      console.log("direccionamiento a pagina de registro");
    }
}



function passwordMatchValidator(g: FormGroup) {
  //return g.get('contraseña').value === g.get('contraseña').value
     //? null : {'mismatch': true};
}
