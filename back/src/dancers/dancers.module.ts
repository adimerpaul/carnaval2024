import { Module } from '@nestjs/common';
import { DancersService } from './dancers.service';
import { DancersGateway } from './dancers.gateway';

@Module({
  providers: [DancersGateway, DancersService],
})
export class DancersModule {}
