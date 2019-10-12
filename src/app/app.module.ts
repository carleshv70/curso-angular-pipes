import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import LocaleEs from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';

registerLocaleData(LocaleEs);

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: LOCALE_ID, useValue: "es"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
