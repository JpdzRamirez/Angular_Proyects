import { Component, ElementRef,Input,
   OnInit, ViewChild,AfterViewInit,AfterContentInit, Renderer2 } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'appLogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit,AfterContentInit{

  @ViewChild('user', {static: false})userInput:ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('passwordValidation', {static: false})passwordInput:ElementRef<HTMLInputElement> = {} as ElementRef;

  @Input() passwordText:string;

  public hide = true;
  public form;
  private isButtonVisible:boolean=false;


  constructor(private renderer2:Renderer2,private fb:FormBuilder){
   this.form  = this.fb.group({
        user:['',[Validators.required, Validators.minLength(6)]],
        password:['',[Validators.required,Validators.minLength(6)]]
    });
    this.passwordText='';
    }

      //close spinner
      ngAfterContentInit(): void {
      }
      //open spinner
      ngOnInit(){
      }

      ngAfterViewInit() {
      }

     //child functions

    public activateFields(){
      //console.log(this.userInput.nativeElement);
      const asUserElement=this.userInput.nativeElement;
      const asPasswordElement=this.passwordInput.nativeElement;
      //this.renderer2.setStyle(asUserelement,'color', 'red');
      this.renderer2.addClass(asUserElement,'movible');
      this.renderer2.addClass(asPasswordElement,'movible');

      if(this.form.controls['password'].value!=""){
        this.renderer2.removeAttribute(asPasswordElement,'hidden');
      }else{
        asPasswordElement.setAttribute('hidden', 'true');
      }
      //console.log(this.form.controls['password'].value);


    }

  //Getters
  public getButtonVisible():boolean {
    return this.isButtonVisible;
    }
  public setButtonVisibleStatus(status:boolean){
      this.isButtonVisible=status;
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
