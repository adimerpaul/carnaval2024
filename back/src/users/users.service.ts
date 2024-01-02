import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {EntityManager, Repository} from "typeorm";

@Injectable()
export class UsersService {
  constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private readonly entityManager: EntityManager
  ) {
  }
  async create(createUserDto: CreateUserDto) {
    const newUser = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(newUser);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
  async generate() {
    await this.entityManager.query('TRUNCATE TABLE public.user RESTART IDENTITY CASCADE');
    const newUser = this.usersRepository.create({
      name: 'admin',
      password: 'admin',
    });
    return await this.usersRepository.save(newUser);
  }
}
