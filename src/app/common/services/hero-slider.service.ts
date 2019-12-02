import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroSliderService {

  subject = new Subject<string>() ;
  constructor() { }


  getSliderSubjectAsObservable():Observable<string>{
    return this.subject.asObservable();
  }

  slide(direction: string): void{
    console.log(direction) ;
    this.subject.next(direction) ;
  }
}
