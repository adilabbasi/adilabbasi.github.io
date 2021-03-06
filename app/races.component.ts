import { Component } from '@angular/core';
import { RaceService } from './race.service';
import { Race } from './race';
import {RacesDriverComponent} from "./races-driver.component";

@Component({
  selector: 'my-app',
  templateUrl: 'app/races.component.html',
  styleUrls:['app/races.component.css']
})

export class RacesComponent {

  constructor(private raceService: RaceService) {

  }

  heading = "Formula 1 Schedule"
  cash = 10000;
  driver = '';
  races: Race[];

  ngOnInit() {
    this.races = this.raceService.getRaces();
  }

  totalCost() {
    let sum = 0;
    if (this.races) {
      for (let race of this.races) {
        if (race.isRacing) sum += race.entryFee;
      }
    }
    return sum;
  }

  castDate(date) {
    return new Date(date);
  }

  cashLeft() {
    return this.cash - this.totalCost();
  }

  enterRace(race) {
    if (this.cashLeft() > race.entryFee) {
      race.isRacing = true;
    } else {
      alert("You don't have enough cash");
    }
  }

  cancelRace(race) {
    race.isRacing = false;
  }
}

