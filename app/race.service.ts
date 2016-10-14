import { Injectable } from '@angular/core';

import { Race } from './race';
import { Driver } from './driver';
import { RACES } from './mocks';
import { DRIVER } from './mocks-driver';

@Injectable()
export class RaceService {
    getRaces(): Race[] {
        return RACES;
    }

    getDiver(): Driver {
        return DRIVER;
    }
}