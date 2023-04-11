import { Component, ElementRef,Output,
  OnInit, ViewChild,AfterViewInit,AfterContentInit, Renderer2,RendererFactory2  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { myValidations } from '../../utils/my-validations';
import { myfunctionsService } from '../../utils/services/my-functions.service';
import { UsuariosService } from 'src/app/utils/services/usuarios.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


    //DOOM ELEMENT CHILD ACCESS
    @ViewChild('userValidation', {static: false})userInput:ElementRef<HTMLInputElement> = {} as ElementRef;
    @ViewChild('passwordValidation', {static: false})passwordInput:ElementRef<HTMLInputElement> = {} as ElementRef;
    @ViewChild('passwordConfirmation', {static: false})inputPasswordConfirm:ElementRef<HTMLInputElement> = {} as ElementRef;
    @ViewChild('length', {static: false})lengthInput:ElementRef<HTMLInputElement>={} as ElementRef;
    @ViewChild('lower', {static: false})lowerInput:ElementRef<HTMLInputElement>={} as ElementRef;
    @ViewChild('capital', {static: false})capitalInput:ElementRef<HTMLInputElement>={} as ElementRef;
    @ViewChild('number', {static: false})numberInput:ElementRef<HTMLInputElement>={} as ElementRef;
    @ViewChild('special', {static: false})specialInput:ElementRef<HTMLInputElement>={} as ElementRef;

    public form=new FormGroup({});;
    public hide=true;
    public hide2=true;
      //RegExp
      private  upperCaseLetters;
      private lowerCaseLetters;
      private  numbers;
      private  especialLetters;

      constructor(
        private fb:FormBuilder,
        private renderer2: Renderer2,
        private herramientas:myfunctionsService,
        private Usuarios:UsuariosService,
        ){
        //this.renderer2 = rendererFactory.createRenderer(null, null);
        this.form  = this.fb.group({
              firstName:['',[Validators.required,Validators.maxLength(20)]],
              lastName:['',[Validators.required,Validators.maxLength(20)]],
              email:['',[Validators.required,Validators.email]],
              date:['',[Validators.required]],
              user:['',[Validators.required, Validators.minLength(6)]],
              password:['',[Validators.required,myValidations.passwordChecker]],
              confirmPassword:['',[Validators.required]],
          },
          {
            Validators:this.MatchPassword('password','confirmPassword')
          }
          );
          //Validators.pattern('^(?=.*?[A-Z]).$')
          this.upperCaseLetters=/[A-Z]/g;
          this.lowerCaseLetters=/[a-z]/g;
          this.numbers=/[0-9]/g;
          this.especialLetters=/[!@?=.*&%$#]/d;
      }

      get f(){
        return this.form.controls;
      }

  MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors['MustMatch']) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ Mustmatch: true });
      } else {
        confirmPasswordControl.setErrors(null);
      }
    }

  }

      ngOnInit(): void {
        this.Usuarios.cargarUsuarios().subscribe(resp=>{
          console.log(resp);
        });
      }


     public updatePasswordFieldConfirm(parametro:any):any{
      return{
        'validationDivConfirmPassword_disabled':parametro.length ==0,
        'validationDivConfirmPassword_enabled':parametro.length >0
    }
      }

      public updateClassPasswordField(parametro:any):any{
        return{
          'validationDivPassword_disabled':parametro.length ==0,
          'validationDivPassword_enabled':parametro.length >0
      }
    }
    public updateClassUserField(parametro:any):any{
      return{
        'validationDivPassword_disabled':parametro.length ==0,
        'validationDivPassword_enabled':parametro.length >0
        }
    }
   //child functions

      public onChangesInputField(){

      }

      public onChangesUserField(){
        //si existen registros en user input
        const asUserElement=this.userInput.nativeElement;

        if(this.form.controls['user'].value!=""){
          this.herramientas.hideHtmlElement(asUserElement,true);
        }else{
          this.herramientas.hideHtmlElement(asUserElement,false);
        }
      }

      public onPasswordFieldConfirm(){
        const asPasswordConfirmElement=this.inputPasswordConfirm.nativeElement;
      }

      public onChangesPasswordField(){

        //password input value
        const asPasswordElement=this.passwordInput.nativeElement;

        //validators css
        const asLengthElement=this.lengthInput.nativeElement;
        const asCapitalElement=this.capitalInput.nativeElement;
        const asLowerElement=this.lowerInput.nativeElement;
        const asNumberElement=this.numberInput.nativeElement;
        const asEspecialElement=this.specialInput.nativeElement;

        //variables
        let tempPivote:any;

        tempPivote= this.form.controls['password'].value; // assignation
        let cadena: string[] = Array.from(tempPivote); // casted a array


        //Sí existen registros en password inputted
        if(this.form.controls['password'].value!=''){

          //if hidden is assigned it will be removed

          //this.hideElementHtml(asPasswordElement,true);
          this.herramientas.hideHtmlElement(asPasswordElement,true);

          // Length of password ✅
              if(tempPivote.length>=6){ //validamos longitud >6 ok , <6 not ok
                  this.herramientas.removedClass(asLengthElement,'notValid');
                  this.herramientas.addedClass(asLengthElement,'valid');
              }else{
                  this.herramientas.removedClass(asLengthElement,'valid');
                  this.herramientas.addedClass(asLengthElement,'notValid');
              }

              // LowerCaseLetter of password Ⓜ
              if(tempPivote.match(this.lowerCaseLetters)){

                this.herramientas.removedClass(asLowerElement,'notValid');
                  this.herramientas.addedClass(asLowerElement,'valid');
              }else{
                this.herramientas.removedClass(asLowerElement,'valid');
                  this.herramientas.addedClass(asLowerElement,'notValid');
              }

              //  UpperCaseLetter of password Ⓜ
              if(tempPivote.match(this.upperCaseLetters)){

                this.herramientas.removedClass(asCapitalElement,'notValid');
                  this.herramientas.addedClass(asCapitalElement,'valid');
              }else {
                this.herramientas.removedClass(asCapitalElement,'valid');
                  this.herramientas.addedClass(asCapitalElement,'notValid');
              }

              // NumbersCaseLetter of password 5️⃣
              if(tempPivote.match(this.numbers)){

                this.herramientas.removedClass(asNumberElement,'notValid');
                  this.herramientas.addedClass(asNumberElement,'valid');
              }else{
                this.herramientas.removedClass(asNumberElement,'valid');
                  this.herramientas.addedClass(asNumberElement,'notValid');
              }

              // EspeciaCaseLetter of password
              if(tempPivote.match(this.especialLetters)){

                this.herramientas.removedClass(asEspecialElement,'notValid');
                  this.herramientas.addedClass(asEspecialElement,'valid');
              }else{
                this.herramientas.removedClass(asEspecialElement,'valid');
                  this.herramientas.addedClass(asEspecialElement,'notValid');
              }

        }else {
          this.herramientas.hideHtmlElement(asPasswordElement,false);
        }

      }

      ingresar(){
        if (this.form.valid){
          console.log("Todos los datos son válidos");
          console.log(this.form.value);
        }
      else{
        console.log("Hay datos inválidos en el formulario");
      }
      }

      linkBoard(){

      }


}
