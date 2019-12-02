import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BreakpointObserverDirective } from './common/directive/breakpoint-observer.directive';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdmissionComponent } from './admission/admission.component';
import { HomeWelcomeComponent } from './home/home-welcome/home-welcome.component';
import { HomeValuesComponent } from './home/home-values/home-values.component';
import { SectionHeaderComponent } from './common/components/section-header/section-header.component';
import { CardComponent } from './common/components/card/card.component';
import { TextboxComponent } from './common/components/textbox/textbox.component';
import { HomeMissionVisionComponent } from './home/home-mission-vision/home-mission-vision.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BreakpointObserverDirective,
    HomeComponent,
    EventsComponent,
    AboutComponent,
    ContactComponent,
    AdmissionComponent,
    HomeWelcomeComponent,
    HomeValuesComponent,
    SectionHeaderComponent,
    CardComponent,
    TextboxComponent,
    HomeMissionVisionComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
