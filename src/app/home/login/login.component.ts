import { Component, ElementRef,Input,
   OnInit, ViewChild,AfterViewInit,AfterContentInit, Renderer2 } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'appLogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit,AfterContentInit{


  //DOOM ELEMENT CHILD ACCES
  @ViewChild('user', {static: false})userInput:ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('passwordValidation', {static: false})passwordInput:ElementRef<HTMLInputElement> = {} as ElementRef;

  @ViewChild('length', {static: false})lengthInput:ElementRef<HTMLInputElement>={} as ElementRef;

  @Input() passwordText:string;

  public hide = true;
  public form;

  private regex1:Array<String>=[];
  private regex2:Array<String>=[];
  private regex3:Array<String>=[];
  private regex4:Array<String>=[];




  // inyectable dependency
  constructor(private renderer2:Renderer2,private fb:FormBuilder){
  this.form  = this.fb.group({
        user:['',[Validators.required, Validators.minLength(6)]],
        password:['',[Validators.required,Validators.minLength(6)]]
    });

    this.passwordText='';
    this.regex1.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',);
    this.regex2.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z' );
    this.regex3.push('0', '1', '2', '3', '4', '5', '6', '7', '8', '9');
    this.regex4.push('!','@','@','#','$','%','^','&','*');
    }

      //close spinner
      ngAfterContentInit(): void {
      }
      //open spinner
      ngOnInit(){
        console.log(this.regex1);
      }

      ngAfterViewInit() {
      }
      updateNameClasses(parametro:any):any{
        return{
          '':parametro.length==0,
          'validationDiv_exit':parametro.length ==2,
          'validationDiv_enabled':parametro.length >2
        }

      }
     //child functions

    public activateFields(){
      //console.log(this.userInput.nativeElement);
      const asUserElement=this.userInput.nativeElement;
      const asPasswordElement=this.passwordInput.nativeElement;

      //Practice excercise for render2
     // this.renderer2.addClass(asUserElement,'movible');
      //this.renderer2.addClass(asPasswordElement,'movible');
      //this.renderer2.setStyle(asUserelement,'color', 'red');

      const asLenghtElement=this.lengthInput.nativeElement;

      //variables
      let tempPivote:any;
      tempPivote= this.form.controls['password'].value; //obtenemos el valor de password
      let cadena: string[] = Array.from(tempPivote); // casteo a array

      console.log(cadena);

      //Sí existen registros en password inputfield
      if(this.form.controls['password'].value!=""){
              //Mostramos el contenido
              //this.renderer2.removeAttribute(asPasswordElement,'hidden');
              //this.renderer2.removeClass(asPasswordElement,'validationDiv_enabled');
              //this.renderer2.addClass(asPasswordElement,'validationDiv_enabled');
              //validamos longitud >6 ok , <6 not ok
              if(tempPivote.length>=6){
                this.renderer2.removeClass(asLenghtElement,'notValid');
                this.renderer2.addClass(asLenghtElement,'valid');
              }else{
                this.renderer2.removeClass(asLenghtElement,'valid');
                this.renderer2.addClass(asLenghtElement,'notValid');
              }



      }else{
       // this.renderer2.removeClass(asPasswordElement,'validationDiv_enabled');
        //this.renderer2.addClass(asPasswordElement,'validationDiv_exit');
        //this.renderer2.setAttribute(asPasswordElement,'hidden','true');
      }
      //console.log(this.form.controls['password'].value);


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
