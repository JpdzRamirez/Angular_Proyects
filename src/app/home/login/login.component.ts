import { Component, ElementRef,Input,
OnInit, ViewChild,AfterViewInit,AfterContentInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


import { myValidations } from 'src/app/utils/my-validations';

import { myfunctionsService } from 'src/app/utils/services/my-functions.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[myfunctionsService]
})
export class LoginComponent implements OnInit{



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
      //RegExp
      private  upperCaseLetters;
      private lowerCaseLetters;
      private  numbers;
      private  especialLetters;



      ngOnInit(): void {

      }

      constructor(private fb:FormBuilder,private herramientas:myfunctionsService,private router:Router){

        this.form  = this.fb.group({
              user:['',[Validators.required, Validators.minLength(6)]],
              password:['',[Validators.required,myValidations.passwordChecker]]
          });
          //Validators.pattern('^(?=.*?[A-Z]).$')
          this.upperCaseLetters=/[A-Z]/g;
          this.lowerCaseLetters=/[a-z]/g;
          this.numbers=/[0-9]/g;
          this.especialLetters=/[!@?=.*&%$#]/d;
      }



      public updateClassPasswordField(parametro:any):any{
        return{
          'validationDiv_disabled':parametro.length ==0,
          'validationDiv_enabled':parametro.length >0
      }
      }
      public updateClassUserField(parametro:any):any{
        return{
          'validationDiv_disabled':parametro.length ==0,
          'validationDiv_enabled':parametro.length >0
          }
        }
      //child functions

      public onChangesUserField(){
        //si existen registros en user input
        const asUserElement=this.userInput.nativeElement;

        if(this.form.controls['user'].value!=""){
          this.herramientas.hideHtmlElement(asUserElement,true);
        }else{
          this.herramientas.hideHtmlElement(asUserElement,false);
        }
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

          //this.hideElementHtml(asPasswordElement,true);⭕
          this.herramientas.hideHtmlElement(asPasswordElement,true);
          //this.tempo.hideHtmlElement(asPasswordElement,true);
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
      registrar(){
        this.router.navigate(['home/signup']);
      }
}



function passwordMatchValidator(g: FormGroup) {
  //return g.get('contraseña').value === g.get('contraseña').value
     //? null : {'mismatch': true};
}
