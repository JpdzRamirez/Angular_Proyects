import { Injectable, Renderer2 } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class myfunctionsService{

  constructor(private render:Renderer2){}
  hideHtmlElement(elementRef:any,status:boolean):void{
    let seconds = 0.25;
        if(status==true){// if status is true hidden element has been removed
          this.render.removeAttribute(elementRef,'hidden');
        }else if(status==false){
          setTimeout(() => { // set attribute value after 3 seconds,
            this.render.setAttribute(elementRef,'hidden','');
          }, seconds * 1000);
        }
  }
}

