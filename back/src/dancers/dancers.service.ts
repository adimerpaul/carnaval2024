import { Injectable } from '@nestjs/common';
import { CreateDancerDto } from './dto/create-dancer.dto';
import { UpdateDancerDto } from './dto/update-dancer.dto';
import {Dancer} from "./entities/dancer.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";

@Injectable()
export class DancersService {
  constructor(
      @InjectRepository(Dancer)
      private readonly dancersRepository: Repository<Dancer>,
  ) {}
  create(createDancerDto: CreateDancerDto) {
    return 'This action adds a new dancer';
  }

  async findAll() {
    return await this.dancersRepository.find({order:{id:"ASC"}});
  }

  findOne(id: number) {
    return `This action returns a #${id} dancer`;
  }

  update(id: number, updateDancerDto: UpdateDancerDto) {
    return `This action updates a #${id} dancer`;
  }

  remove(id: number) {
    return `This action removes a #${id} dancer`;
  }
}
