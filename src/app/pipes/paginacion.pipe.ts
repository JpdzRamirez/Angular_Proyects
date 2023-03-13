import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'paginacion'
})
export class PaginacionPipe implements PipeTransform {


  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
