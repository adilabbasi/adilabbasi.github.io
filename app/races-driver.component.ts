import { Component } from '@angular/core';
import { RaceService } from './race.service';
import { Driver } from './driver';


@Component({
    providers: [RaceService],
    selector: 'driver-name',
    templateUrl: 'app/races-driver.component.html',
    styleUrls:['app/races-driver.component.css']
})

export class RacesDriverComponent {

    constructor(private raceService: RaceService) {

    }

    driver: Driver;
    isDriver = false;

    showDriver() {
        this.driver = this.raceService.getDiver();
        this.isDriver = true;
    }
}