import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterdata'
})
export class FilterdataPipe implements PipeTransform {

  transform(servers:any[], status?:string): any[] {
    let temp:any[] = [];

    if(servers.length>0){

     for(let i=0; i<servers.length; i++){
       if(servers[i].status == status){
          temp.push(servers[i]);
       }
     }

     return temp;
    }
    return null;
  }

}
