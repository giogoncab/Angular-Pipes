import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import localeES from '@angular/common/locales/es-GT';
registerLocaleData(localeES);

import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-GT' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
