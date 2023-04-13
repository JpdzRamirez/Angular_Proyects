import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { myfunctionsService } from 'src/app/utils/services/my-functions.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild('#imgTransition_1', { static: false })
  imgTransition_1: ElementRef<HTMLInputElement> = {} as ElementRef;

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
  ngOnInit(): void {
    console.log('timer call');
    this.timerOutput();
  }
  public getImageShow():string{
    return this.imageShow;
  }
  public timerOutput(){
    //console.log('timer output');
    let seconds = 1;
    var image_to_show = 0;
    const asImgElement_1 = this.imgTransition_1.nativeElement;

    setInterval(() => {
      // set attribute value after 3 seconds,
      //console.log('timer start');

      if (image_to_show >= this.imgTransitionList.length - 1) {
        //Return to the first one
        image_to_show = 0;
      } else {
        image_to_show++;
      }
      // console.log(this.imgTransitionList[image_to_show]);
      this.imageShow=this.imgTransitionList[image_to_show];

    }, seconds * 6000);
  }
}
