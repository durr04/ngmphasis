import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ShortenPipe} from "./mypipes/shorten.pipe";
import { FilterdataPipe } from './mypipes/filterdata.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ShortenPipe,
    FilterdataPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
