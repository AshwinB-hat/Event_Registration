import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailFormComponent } from './detail-form/detail-form.component';
import { LandingComponent } from './landing/landing.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventListComponent } from './event-list/event-list.component';
import { EventComponent } from './event-list/event/event.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailFormComponent,
    LandingComponent,
    NavBarComponent,
    EventListComponent,
    EventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
