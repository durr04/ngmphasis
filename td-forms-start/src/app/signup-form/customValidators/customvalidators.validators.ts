import {AbstractControl, ValidationErrors} from "@angular/forms";
import {Observable} from "rxjs/Observable";


export class MyValidators{

  static cannotContainSpace(control:AbstractControl):ValidationErrors | null{

      if( (control.value as string).indexOf(' ')>0 ){
        return {cannotContainSpace:true};
      }

      return null;
  }

  static unameShouldBeUnique(control:AbstractControl) : Promise<ValidationErrors|null> | Observable<ValidationErrors|null>
  {
    return new Promise( (resolve, reject)=>{
      setTimeout(()=>{
        if(control.value == 'xyz'){
          resolve({shouldbeunique:true})
        }else{
          reject(null)
        }
      },2000)

    } )
  }
}
