import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {ConfigModule} from "@nestjs/config";
import {Dancer} from "../dancers/entities/dancer.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([User, Dancer]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
