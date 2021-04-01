import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureImpure',
  
})
export class PureImpurePipe implements PipeTransform {

  transform(value,text) {
    console.log('pipe',text);
    return value+text;
  }

}
