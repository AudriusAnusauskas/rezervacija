import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RezervacijaComponent } from './rezervacija/rezervacija.component';
import { StudFormComponent } from './stud-form/stud-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RezervacijaComponent,
    StudFormComponent,
    
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
