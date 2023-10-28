import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defultString'
})
export class DefultStringPipe implements PipeTransform {

  transform(value: string): unknown {
    return value ? value :'-----';
  }

}
