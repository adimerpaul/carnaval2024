import {Controller, Get} from '@nestjs/common';
import {DancersService} from "./dancers.service";

@Controller('dancers')
export class DancersController {
    constructor(
        private readonly dancersService: DancersService,
    ) {}
    @Get()
    findAll() {
        return this.dancersService.findAll();
    }
}
