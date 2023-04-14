import { Component, ViewEncapsulation } from '@angular/core';
import { LoaderService } from 'src/app/utils/services/loader-spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SpinnerComponent {

  isLoading$=this.loader.isLoading$;

  constructor(public loader: LoaderService) {}
}
