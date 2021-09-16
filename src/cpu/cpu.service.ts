import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class CpuService {
    constructor(private PowerService: PowerService) {}

    compute(a: number, b: number) {
        console.log('Drawing 10 watts of power from Power Service');
        this.PowerService.supplyPower(10);
        return a + b;
    }
}
