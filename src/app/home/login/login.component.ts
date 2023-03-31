import { Component, ElementRef,
   OnInit, ViewChild,AfterViewInit,AfterContentInit, Renderer2 } from '@angular/core';
import { FormBuilder,FormControl,FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'appLogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit,AfterViewInit,AfterContentInit{

  @ViewChild('user', {static: false})userInput:ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('password', {static: false})passwordInput:ElementRef<HTMLInputElement> = {} as ElementRef;

  public hide = true;
  public form;
  private isButtonVisible:boolean=false;


  constructor(private renderer2:Renderer2,private fb:FormBuilder){
   this.form  = this.fb.group({
        user:['',[Validators.required, Validators.minLength(6)]],
        password:['',[Validators.required,Validators.minLength(6)]]
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

     //child functions

    public setColor(){
      //console.log(this.userInput.nativeElement);
      const asUserElement=this.userInput.nativeElement;
      const asPasswordElement=this.passwordInput.nativeElement;
      //this.renderer2.setStyle(asUserelement,'color', 'red');
      this.renderer2.addClass(asUserElement,'movible');
      this.renderer2.addClass(asPasswordElement,'movible');
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
