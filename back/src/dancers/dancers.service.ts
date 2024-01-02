import { Injectable } from '@nestjs/common';
import { CreateDancerDto } from './dto/create-dancer.dto';
import { UpdateDancerDto } from './dto/update-dancer.dto';

@Injectable()
export class DancersService {
  create(createDancerDto: CreateDancerDto) {
    return 'This action adds a new dancer';
  }

  findAll() {
    return `This action returns all dancers`;
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
