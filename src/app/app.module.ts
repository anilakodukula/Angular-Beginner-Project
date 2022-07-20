import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({ // directives use modules for organization
  declarations: [//declares the app component so that angular can locate its selector
    AppComponent // properties are arrays
  ],
  imports: [
    BrowserModule //external modules that registers important application service providers such as error handling.
  ],
  bootstrap: [AppComponent] //startup component of the application
})
export class AppModule { }
