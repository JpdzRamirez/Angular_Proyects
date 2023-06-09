import { Directive, Renderer2 } from "@angular/core";
import { ValidatorFn } from "@angular/forms";


// @Injectable({
//   providedIn: 'root'
// })
@Directive({
  selector: '[appGoWild]'
})
export class myfunctionsService{

  constructor(private render:Renderer2){}

  hideHtmlElement(elementRef:any,status:boolean):void{
    let seconds = 0.25;
        if(status==true){// if status is true hidden element has been removed
          this.removeAttrib(elementRef,'hidden');
        }else if(status==false){
          setTimeout(() => { // set attribute value after 3 seconds,
            this.setAttrib(elementRef,'hidden','');
          }, seconds * 1000);
        }
  }
  removeAttrib(ElementRef:any,attributeRef:string):void{
    this.render.removeAttribute(ElementRef,attributeRef);
  }
  setAttrib(ElementRef:any,attributeRef:string,attributeContent:string){
    this.render.setAttribute(ElementRef,attributeRef,attributeContent);
  }
  // this.renderer2.removeClass(asLengthElement,'notValid');
  // this.renderer2.addClass(asLengthElement,'valid');
  removedClass(ElementRef:any,classRef:string):void{
    this.render.removeClass(ElementRef,classRef);
  }
  addedClass(ElementRef:any,classRef:string):void{
    this.render.addClass(ElementRef,classRef);
  }

  matchValidator(control:any,controlTwo:any): ValidatorFn {
    return () => {
      //console.log("in match validtaion "+control.value+" ."+controlTwo.value)
      if (control.value !== controlTwo.value){
        return { match_error: true };
      }
      return null;
    };
  }



}

