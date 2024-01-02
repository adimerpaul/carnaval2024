import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { DancersService } from './dancers.service';
import { CreateDancerDto } from './dto/create-dancer.dto';
import { UpdateDancerDto } from './dto/update-dancer.dto';

@WebSocketGateway()
export class DancersGateway {
  constructor(private readonly dancersService: DancersService) {}

  @SubscribeMessage('createDancer')
  create(@MessageBody() createDancerDto: CreateDancerDto) {
    return this.dancersService.create(createDancerDto);
  }

  @SubscribeMessage('findAllDancers')
  findAll() {
    return this.dancersService.findAll();
  }

  @SubscribeMessage('findOneDancer')
  findOne(@MessageBody() id: number) {
    return this.dancersService.findOne(id);
  }

  @SubscribeMessage('updateDancer')
  update(@MessageBody() updateDancerDto: UpdateDancerDto) {
    return this.dancersService.update(updateDancerDto.id, updateDancerDto);
  }

  @SubscribeMessage('removeDancer')
  remove(@MessageBody() id: number) {
    return this.dancersService.remove(id);
  }
}
