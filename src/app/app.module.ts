import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FcfsComponent } from './fcfs/fcfs.component';
import { PpsComponent } from './pps/pps.component';
import { NppsComponent } from './npps/npps.component';

@NgModule({
  declarations: [
    AppComponent,
    FcfsComponent,
    PpsComponent,
    NppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
