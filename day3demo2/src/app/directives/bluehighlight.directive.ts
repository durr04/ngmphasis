import {Directive,ElementRef, Renderer2, HostBinding} from "@angular/core";


@Directive({
  selector: '[blueHighLight]'
})
export class BlueHighLightDirective{

  @HostBinding('style.backgroundColor') myColor:string = 'yellow';

  constructor(eleRef:ElementRef, renderer:Renderer2){
      //console.log("bluehighlight directive detected");
      //console.log(eleRef.nativeElement)
      //eleRef.nativeElement.style.backgroundColor = 'blue'

      //renderer.setStyle(eleRef.nativeElement, 'backgroundColor', 'yellow')
  }

}
