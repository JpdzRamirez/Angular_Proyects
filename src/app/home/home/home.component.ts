import { Component, ElementRef, ViewChild,AfterViewInit, EventEmitter, Output} from '@angular/core';

import { myfunctionsService } from 'src/app/utils/services/my-functions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {



  @ViewChild('backTransition',{static:false})backTransition: ElementRef<HTMLInputElement> = {} as ElementRef;

  private imageShow:string="../../../assets/image-backgrounds/home-5.jpg";

  private imgTransitionList: Array<string> = [];

  constructor(private herramientas: myfunctionsService) {
    this.imgTransitionList.push(
      '../../../assets/image-backgrounds/home-1.jpg'
    );
    this.imgTransitionList.push(
      '../../../assets/image-backgrounds/home-2.jpg'
    );
    this.imgTransitionList.push(
      '../../../assets/image-backgrounds/home-3.jpg'
    );
    this.imgTransitionList.push(
      '../../../assets/image-backgrounds/home-4.jpg'
    );
    this.imgTransitionList.push(
      '../../../assets/image-backgrounds/home-5.jpg'
    );
  }

  ngAfterViewInit() {
    this.timerOutput();
  }
  public getImageShow():string{
    return this.imageShow;
  }


  //TIMER FOR TRANSITIONS BACKGROUNDS

  public timerOutput(){
    //console.log('timer output');
    let seconds = 1;
    var image_to_show = 0;
    const asImgElement1 = this.backTransition.nativeElement;

    setInterval(() => { // set attribute value after 3 seconds,
     // console.log(asImgElement1.classList);
      this.herramientas.removedClass(asImgElement1,'fadeIn');
      this.herramientas.addedClass(asImgElement1,'fadeOut');
      //console.log('timer start');
      setTimeout(()=>{
        if (image_to_show >= this.imgTransitionList.length - 1) {
          //Return to the first one
          image_to_show = 0;
        } else {
          image_to_show++;
        }
        this.herramientas.addedClass(asImgElement1,'fadeIn');
        this.herramientas.removedClass(asImgElement1,'fadeOut');
        // console.log(this.imgTransitionList[image_to_show]);
        this.imageShow=this.imgTransitionList[image_to_show];
      }, seconds * 1000);
    }, seconds * 10000);
  }


  // NAVIGATE LINKS

  public loginButton(){
    console.log("logged in navigate");
  }
}
