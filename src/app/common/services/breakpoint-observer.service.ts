import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakpointObserverService {


  
  constructor() { }


  getBreakpointObserverFor( mediaQuery: string) : Observable<boolean>{

     return new Observable(subscriber =>{
       let mediaQueryList = window.matchMedia(mediaQuery) ;
        if(window.innerWidth >= 650){
          console.log("called")
          setTimeout(() => {
            subscriber.next(true); // Ensure correct styles are applied when initially in tablet/desktop mode
                                   // it is within setTimeout to prevent the value from being overriden
          },100)
          
        }
        mediaQueryList.addListener((e) => {
          subscriber.next(true);  //Ensure correct styles are applied when moving from mobile to tablet or desktop
        })
        
     })
     
  }

  
}
