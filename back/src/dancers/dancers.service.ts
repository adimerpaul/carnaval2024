import { Injectable } from '@nestjs/common';
import { CreateDancerDto } from './dto/create-dancer.dto';
import { UpdateDancerDto } from './dto/update-dancer.dto';
import {Dancer} from "./entities/dancer.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import * as fs from 'fs';

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
    const dancers = await this.dancersRepository.find({ order: { id: 'ASC' } });

    // Convierte la imagen a base64 y asigna la propiedad 'imageBase64'
    for (const dancer of dancers) {
      dancer.image = this.convertImageToBase64(dancer.image);
    }

    return dancers;
  }

  private convertImageToBase64(imagePath: string): string {
    // Lee la imagen como un buffer
    const imageBuffer = fs.readFileSync(`./uploads/${imagePath}`);

    // Convierte el buffer a base64
    const imageBase64 = imageBuffer.toString('base64');

    return imageBase64;
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
