import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./entities/user.entity";
import {Column, EntityManager, Repository} from "typeorm";
import {Dancer} from "../dancers/entities/dancer.entity";

@Injectable()
export class UsersService {
  constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        @InjectRepository(Dancer)
        private dancersRepository: Repository<Dancer>,
        private readonly entityManager: EntityManager,
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
    await this.usersRepository.save(newUser);
    await this.entityManager.query('TRUNCATE TABLE public.dancer RESTART IDENTITY CASCADE');

  // @Column({nullable: true})
  //   name: string;
  // @Column({nullable: true})
  //   description: string;
  // @Column({nullable: true,default: 'notFound.jpg'})
  //   image: string;
  // @Column({type: 'decimal', precision: 10, scale: 2, nullable: true})
  //   latitud: number;
  // @Column({type: 'decimal', precision: 10, scale: 2, nullable: true})
  //   longitud: number;
  // @Column({nullable: true})
  //   positionSaturday: number;
  // @Column({nullable: true})
  //   positionSunday: number;
  // @Column({nullable: true})
  //   video: string;

    const newDancer = this.dancersRepository.save([
      {positionSaturday:1,positionSunday:10,name:'GRAN TRADICIONAL AUTENTICA DIABLADA ORURO', image:'diablada.png'},
      {positionSaturday:2,positionSunday:11,name:'FRATERNIDAD HIJOS DEL SOL LOS INCAS', image:'incas.png'},
      {positionSaturday:3,positionSunday:12,name:'CONJUNTO FOLKLORICO MORENADA ZONA NORTE', image:'morenada.png'},
      {positionSaturday:4,positionSunday:13,name:'FRAT. ARTISTICA ZAMPOÑEROS HIJOS DEL PAGADOR', image:'zamponeros.png'},
      {positionSaturday:5,positionSunday:14,name:'CENTRO TRADICIONAL NEGRITOS DE PAGADOR', image:'negritos.png'},
      {positionSaturday:6,positionSunday:15,name:'CONJUNTO FOLKLORICO AHUATIRIS', image:'antawaras.png'},
      {positionSaturday:7,positionSunday:16,name:'CONJUNTO WACA WACAS SAN AGUSTIN DERECHO', image:'wacatoncoris.png'},
      {positionSaturday:8,positionSunday:17,name:'FRATERNIDAD MORENADA CENTRAL ORURO', image:'morenada.png'},
      {positionSaturday:9,positionSunday:18,name:'CONJUNTO CAPORALES INFANTILES IGNACIO LEON', image:'caporales.png'},
      {positionSaturday:10,positionSunday:19,name:'CONJUNTO TRADICIONAL FOLKLORICO DIABLADA ORURO', image:'diablada.png'},
      {positionSaturday:11,positionSunday:20,name:'CONJUNTO TRADICIONAL LLAMERADA ZONA NORTE ORURO', image:'llamerada.png'},
      {positionSaturday:12,positionSunday:21,name:'FRATERNIDAD CAPORALES CENTRALISTAS', image:'caporales.png'},
      {positionSaturday:13,positionSunday:22,name:'FRAT. MORENADA CENTRAL FDDA. COM, COCANI', image:'morenada.png'},
      {positionSaturday:14,positionSunday:23,name:'CONJUNTO FOLKLORICO TOBAS ZONA SUD', image:'tobas.png'},
      {positionSaturday:15,positionSunday:24,name:'CONJUNTO NEGRITOS UNIDOS DE LA SAYA', image:'negritos.png'},
      {positionSaturday:16,positionSunday:25,name:'CONJUNTO WACATOCORIS URUS', image:'wacatoncoris.png'},
      {positionSaturday:17,positionSunday:26,name:'CONJUNTO FOLKLORICO ANTAWARA', image:'antawaras.png'},
      {positionSaturday:18,positionSunday:27,name:'CONJUNTO TINKUS LOS TOLKAS', image:'tinkus.png'},
      {positionSaturday:19,positionSunday:37,name:'CONJUNTO MORENADA MEJILLONES', image:'morenada.png'},
      {positionSaturday:20,positionSunday:38,name:'FRATERNIDAD FOLKLORICA LLAMERADA SOCAVÓN', image:'llamerada.png'},
      {positionSaturday:21,positionSunday:39,name:'CONJUNTO FOLK. Y CULTURAL PHUJLLAY ORURO', image:'pujllay.png'},
      {positionSaturday:22,positionSunday:40,name:'GRUPO DE DANZA ESTILIZADA SURI SICURI', image:'surisicuri.png'},
      {positionSaturday:23,positionSunday:41,name:'CONJUNTO FOLKLORICO SAMBOS CAPORALES', image:'caporales.png'},
      {positionSaturday:24,positionSunday:42,name:'FRATERNIDAD CULLAGUADA ORURO', image:'cullaguada.png'},
      {positionSaturday:25,positionSunday:43,name:'CONJUNTO TRADICIONAL TOBAS ZONA CENTRAL', image:'tobas.png'},
      {positionSaturday:26,positionSunday:44,name:'CONJUNTO FOLKLORICO KORY MAJTAS CENTRAL', image:'zamponeros.png'},
      {positionSaturday:27,positionSunday:1,name:'DIABLADA FERROVIARIA ', image:'diablada.png'},
      {positionSaturday:28,positionSunday:2,name:'FRAT. REYES MORENOS FERRARI GHEZZI', image:'morenada.png'},
      {positionSaturday:29,positionSunday:3,name:'CAPORALES REYES DE LA TUNTUNA ENAF', image:'caporales.png'},
      {positionSaturday:30,positionSunday:4,name:'CONJUNTO TINKU LOS JAIRAS DE ORURO', image:'tinkus.png'},
      {positionSaturday:31,positionSunday:5,name:'FRAT. CULLAGUADA TERRIBLES QUIRQUINCHOS', image:'cullaguada.png'},
      {positionSaturday:32,positionSunday:6,name:'FRATERNIDAD KALLAWAYAS BOLIVIA', image:'antawaras.png'},
      {positionSaturday:33,positionSunday:7,name:'CONJ. POTOLOS JHILANCOS CHAYANTA', image:'potolos.png'},
      {positionSaturday:34,positionSunday:8,name:'CONJUNTO FOLKLORICO Y CULTURAL DOCTORCITOS ITOS', image:'doctorcitos.png'},
      {positionSaturday:35,positionSunday:9,name:'FRATERNIDAD DE DANZA ESTILIZADA INTI LLAJTA', image:'antawaras.png'},
      {positionSaturday:36,positionSunday:45,name:'DIABLADA ARTISTICA URUS', image:'diablada.png'},
      {positionSaturday:37,positionSunday:46,name:'FRATERNIDAD CULTURAL REYES MORENOS COMIBOL', image:'morenada.png'},
      {positionSaturday:38,positionSunday:47,name:'CONJUNTO ARTISTICO Y CULTURAL TOBAS URU URU', image:'tobas.png'},
      {positionSaturday:39,positionSunday:48,name:'FRAT. FOLK. CULT. CAPORALES UNIV. SAN SIMÓN', image:'caporales.png'},
      {positionSaturday:40,positionSunday:49,name:'CONJUNTO AUTOCTONO WITITIS', image:'wititis.png'},
      {positionSaturday:41,positionSunday:50,name:'CONJUNTO TINKUS HUAJCHAS', image:'tinkus.png'},
      {positionSaturday:42,positionSunday:51,name:'INCAS KOLLASUYO HIJOS DEL SOCAVON', image:'incas.png'},
      {positionSaturday:43,positionSunday:52,name:'TARQUEADA JATUN JALLPA', image:'antawaras.png'},
      {positionSaturday:44,positionSunday:28,name:'FRATERNIDAD MORENADA METALURGICA ENAF', image:'morenada.png'},
      {positionSaturday:45,positionSunday:29,name:'CENTRO CULTURAL RIKJCHARY LLAJTA', image:'antawaras.png'},
      {positionSaturday:46,positionSunday:30,name:'CONJUNTO UNIVERSITARIO SURI', image:'surisicuri.png'},
      {positionSaturday:47,positionSunday:31,name:'CONJUNTO KANTUS SARTAÑANI', image:'kantus.png'},
      {positionSaturday:48,positionSunday:32,name:'FRATERNIDAD CAPORALES C.B.N.', image:'caporales.png'},
      {positionSaturday:49,positionSunday:33,name:'GRUPO CULTURAL AUTOCTONO SUMAJ PUNCHAY', image:'antawaras.png'},
      {positionSaturday:50,positionSunday:34,name:'FRAT. CULTURAL TINKUS BOLIVIA (AYLLU LLAJWAS)', image:'tinkus.png'},
      {positionSaturday:51,positionSunday:35,name:'FRAT. FOLK. ARTÍSTICA Y CULTURAL PHUJLLAY', image:'pujllay.png'},
      {positionSaturday:52,positionSunday:36,name:'FRAT. ARTÍSTICA Y CULTURAL LA DIABLADA', image:'diablada.png'},
    ]);
  }
}
