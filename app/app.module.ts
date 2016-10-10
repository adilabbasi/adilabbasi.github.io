import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RacesComponent }   from './races.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ RacesComponent ],
  bootstrap:    [ RacesComponent ]
})

export class AppModule { }

