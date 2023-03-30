import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'appLogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  public hide = true;

  form:FormGroup;

  private isButtonVisible:boolean=false;

  ngOnInit():void{

  }
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
        usuario:['',Validators.required],
        contraseña:['',Validators.required]
    });
    };
  //@ViewChild('el') span:ElementRef;


  //Getters
  public getButtonVisible():boolean {
    return this.isButtonVisible;
    }
  public setButtonVisibleStatus(status:boolean){
      this.isButtonVisible=status;
  }

  ngAfterViewInit(){
    //this.span.nativeElement.setAttribute('highlight', '');
  }

    ingresar(){
      console.log(this.form.value);
    }

      public OnChangeButtonVisible(value:boolean){
        if(value==true){
          this.setButtonVisibleStatus(false);
        }
        else{
          this.setButtonVisibleStatus(true);
        }
      }
}
