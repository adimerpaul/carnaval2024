import {WebSocketGateway, SubscribeMessage, MessageBody, WebSocketServer} from '@nestjs/websockets';
import { DancersService } from './dancers.service';
import { CreateDancerDto } from './dto/create-dancer.dto';
import { UpdateDancerDto } from './dto/update-dancer.dto';
import { Server } from 'socket.io';
@WebSocketGateway({cors:true})
export class DancersGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly dancersService: DancersService) {}

  @SubscribeMessage('dancers')
  create(@MessageBody() createDancerDto: CreateDancerDto) {
    return this.dancersService.findAll();
  }
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
      this.server.emit('message', message);
  }
  //
  // @SubscribeMessage('findAllDancers')
  // findAll() {
  //   return this.dancersService.findAll();
  // }
  //
  // @SubscribeMessage('findOneDancer')
  // findOne(@MessageBody() id: number) {
  //   return this.dancersService.findOne(id);
  // }
  //
  // @SubscribeMessage('updateDancer')
  // update(@MessageBody() updateDancerDto: UpdateDancerDto) {
  //   return this.dancersService.update(updateDancerDto.id, updateDancerDto);
  // }
  //
  // @SubscribeMessage('removeDancer')
  // remove(@MessageBody() id: number) {
  //   return this.dancersService.remove(id);
  // }
}
