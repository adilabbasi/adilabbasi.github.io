import { Injectable } from '@angular/core';

import { Race } from './race';
import { RACES } from './mocks';

@Injectable()
export class RaceService {
    getRaces(): Race[] {
        return RACES;
    }
}