
import {Component} from '@angular/core'

@Component({
  selector : 'app-header',
  templateUrl :'./header.component.html'
})
export class HeaderComponent{

    private companyName:string
    private isActive:boolean = false;
    private colspanvalue:number = 2

  constructor(){
      this.companyName = "MPhasis"

      setTimeout(()=>{
        this.isActive = true;
      },2000)
  }

  onClick($event){
    console.log("Button is clicked")
    console.log($event.target.value)
  }

  onKeyUp($event){
        console.log("Enter is pressed")
        console.log($event.target.value)
  }

  onKeyUp1(fname){
    console.log(fname)
  }

}
