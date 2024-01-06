import { Module } from '@nestjs/common';
import { DancersService } from './dancers.service';
import { DancersGateway } from './dancers.gateway';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Dancer} from "./entities/dancer.entity";
import { DancersController } from './dancers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Dancer])],
  providers: [DancersGateway, DancersService],
  controllers: [DancersController],
})
export class DancersModule {}
