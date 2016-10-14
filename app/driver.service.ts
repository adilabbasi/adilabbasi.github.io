import { Injectable } from '@angular/core';
import { DRIVER } from './mocks-driver';

@Injectable()
export class DriverService {
    getDriver() {
        return DRIVER;
    }
}