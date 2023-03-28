import { Component, ViewChild } from '@angular/core';


@Component({
  selector: 'appLogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  public hide = true;

  private isButtonVisible:boolean=false;

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



      public OnChangeButtonVisible(value:boolean){
        if(value==true){
          this.setButtonVisibleStatus(false);
        }
        else{
          this.setButtonVisibleStatus(true);
        }
      }
}
