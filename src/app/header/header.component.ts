import { Component, OnInit, ContentChild, HostBinding, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { trigger, animate, state, transition, style } from "@angular/animations";
import { BreakpointObserverService } from '../common/services/breakpoint-observer.service';
import { HeroSliderService } from '../common/services/hero-slider.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],

  animations: [
     
    trigger("openState", [
      state("close", style({
        height:"0px",
        
      })),
      state("open", style({
        height:"250px",
       
      })),
      transition('close <=> open', [animate('0.5s')]),
    
    ]),           
          ]
})
export class HeaderComponent implements OnInit {

  constructor(private breakpointObserver :BreakpointObserverService , 
    private changeDetectorRef: ChangeDetectorRef, private silderService: HeroSliderService) { }


  isOpened: boolean = false;
  ngOnInit() {

    this.breakpointObserver.getBreakpointObserverFor("(min-width : 650px)").subscribe(result => {
      
      this.isOpened = false;  
      this.silderService.slide("up");
       this.changeDetectorRef.detectChanges();
    })
  }


  menuClicked() {
    this.isOpened = !this.isOpened;
    const slideDirection = this.isOpened ? "down" : "up" ;
    this.silderService.slide(slideDirection);
    
  }
}
