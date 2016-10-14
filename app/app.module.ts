import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RacesComponent }   from './races.component';
import { FormsModule } from '@angular/forms';
import { RaceService } from './race.service';
import { RacesDriverComponent } from './races-driver.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ RacesComponent, RacesDriverComponent ],
  providers:    [ RaceService ],
  bootstrap:    [ RacesComponent ]
})

export class AppModule { }

