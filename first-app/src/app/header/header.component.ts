import { Component, Input } from '@angular/core';


@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})
export class HeaderComponent{

    @Input() cname:string

    private companyName:string
    private location:string = "Bangalore"
    private isActive:boolean = false
    private colspanvalue = 2
    private isBordered = false;

    constructor(){
        this.companyName = "MPhasis"

        setTimeout(()=>{
            this.isActive = true;
        },1000)
    }

    onClickButton($event){
        console.log("Button is Clicked")
        console.log($event.target.value)
    }

    onKeyUp($event){
       console.log("Enter is pressed")
       console.log($event.target.value)
       
    }

}