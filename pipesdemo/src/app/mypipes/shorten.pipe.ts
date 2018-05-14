import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name : 'shorten'
})
export class ShortenPipe implements PipeTransform{

    transform(value:string, limit?:number):string{
      if(!value){
        return null
      }
      return value.substr(0,limit) + '...';
    }

}
