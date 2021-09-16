import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
    constructor(private powerService: PowerService) {
        powerService.supplyPower(10);
    }

    getData() {
        console.log('Drawing 20 watts of power from Power Service');
        this.powerService.supplyPower(20);
        return 'data';
    }
    
}
