import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GaleriaFotosComponent } from './galeria-fotos/galeria-fotos.component';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaFotosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
