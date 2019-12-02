import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { HeroSliderService } from '../common/services/hero-slider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger("slideState", [
      state("up", style({
        top: "3.5em"
      })),
      state("down", style({
        top: "19em"
      })),
      transition("up <=> down", [animate("0.5s")])
    ])
  ]
})
export class HomeComponent implements OnInit {

  slideState = "up";
  constructor(private sliderService: HeroSliderService , private changeDetectorRef: ChangeDetectorRef) { 

  }

  ngOnInit() {
    this.sliderService.getSliderSubjectAsObservable().subscribe(state => {
      console.log(state)
     this.slideState = state ;
     this.changeDetectorRef.detectChanges();
     console.log(this.slideState)

    })
  }

  
}
