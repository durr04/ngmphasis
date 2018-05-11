import {Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding} from "@angular/core";
/**
 * Created by VISHAL on 11-05-2018.
 */

@Directive({
  selector : '[blueheading]'
})
export class BlueDirective implements OnInit{

  @HostBinding('style.backgroundColor') highlightColor = 'transparent'

  @HostListener('mouseover') onMouseOver(){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue')
    this.highlightColor = 'blue'
  }

  @HostListener('mouseleave') onMouseOut(){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'transparent')
    this.highlightColor = "transparent"
  }

  constructor(public eleRef:ElementRef, public renderer:Renderer2){
      //console.log("blueheading attribute is detected")
     // console.log(eleRef)
      // eleRef.nativeElement.style.backgroundColor = "blue"
  }

  ngOnInit(){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'backgroundColor', 'blue')
  }

}
