import { Component, ElementRef,Input,
OnInit, ViewChild,AfterViewInit,AfterContentInit, Renderer2 } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';


import { myValidations } from 'src/app/utils/my-validations';
import { myfunctionsService } from 'src/app/utils/my-functions';


@Component({
  selector: 'app-Login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[myfunctionsService]
})
export class LoginComponent implements OnInit{

  ngOnInit(): void {

  }

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

      constructor(private renderer2:Renderer2,private fb:FormBuilder,private tempo:myfunctionsService){

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

      public hideElementHtml(ElementRef:any, status:boolean):void{
        let seconds = 0.25;
        if(status==true){// if status is true hidden element has been removed
          this.renderer2.removeAttribute(ElementRef,'hidden');
        }else if(status==false){
          setTimeout(() => { // set attribute value after 3 seconds,
            this.renderer2.setAttribute(ElementRef,'hidden','');
          }, seconds * 1000);
        }
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
          this.hideElementHtml(asUserElement,true);
        }else{
          this.hideElementHtml(asUserElement,false);
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
          this.tempo.hideHtmlElement(asPasswordElement,true);
          //this.tempo.hideHtmlElement(asPasswordElement,true);
          // Length of password ✅
              if(tempPivote.length>=6){ //validamos longitud >6 ok , <6 not ok
                  this.renderer2.removeClass(asLengthElement,'notValid');
                  this.renderer2.addClass(asLengthElement,'valid');
              }else{
                  this.renderer2.removeClass(asLengthElement,'valid');
                  this.renderer2.addClass(asLengthElement,'notValid');
              }

              // LowerCaseLetter of password Ⓜ
              if(tempPivote.match(this.lowerCaseLetters)){

                this.renderer2.removeClass(asLowerElement,'notValid');
                  this.renderer2.addClass(asLowerElement,'valid');
              }else{
                this.renderer2.removeClass(asLowerElement,'valid');
                  this.renderer2.addClass(asLowerElement,'notValid');
              }

              //  UpperCaseLetter of password Ⓜ
              if(tempPivote.match(this.upperCaseLetters)){

                this.renderer2.removeClass(asCapitalElement,'notValid');
                  this.renderer2.addClass(asCapitalElement,'valid');
              }else {
                this.renderer2.removeClass(asCapitalElement,'valid');
                  this.renderer2.addClass(asCapitalElement,'notValid');
              }

              // NumbersCaseLetter of password 5️⃣
              if(tempPivote.match(this.numbers)){

                this.renderer2.removeClass(asNumberElement,'notValid');
                  this.renderer2.addClass(asNumberElement,'valid');
              }else{
                this.renderer2.removeClass(asNumberElement,'valid');
                  this.renderer2.addClass(asNumberElement,'notValid');
              }

              // EspeciaCaseLetter of password
              if(tempPivote.match(this.especialLetters)){

                this.renderer2.removeClass(asEspecialElement,'notValid');
                  this.renderer2.addClass(asEspecialElement,'valid');
              }else{
                this.renderer2.removeClass(asEspecialElement,'valid');
                  this.renderer2.addClass(asEspecialElement,'notValid');
              }

        }else {
          this.hideElementHtml(asPasswordElement,false);
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
}



function passwordMatchValidator(g: FormGroup) {
  //return g.get('contraseña').value === g.get('contraseña').value
     //? null : {'mismatch': true};
}
