import { Directive, ElementRef, Renderer2, ChangeDetectorRef } from '@angular/core';
import { BreakpointObserverService } from '../services/breakpoint-observer.service';

@Directive({
  selector: '[appBreakpointObserver]'
})
export class BreakpointObserverDirective {

  constructor(private element: ElementRef , private renderer :Renderer2 , breakpointObserver: BreakpointObserverService , private changeDetectionRef: ChangeDetectorRef) {
     
    breakpointObserver.getBreakpointObserverFor("(min-width : 650px)").subscribe(result => {
      let nativeElement = element.nativeElement;
      console.log("remove height")
      setTimeout(() => {  
        renderer.removeStyle(nativeElement,"height");
      },1000)
      
       
       
      
    })
   }

}
