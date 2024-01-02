import { PartialType } from '@nestjs/mapped-types';
import { CreateDancerDto } from './create-dancer.dto';

export class UpdateDancerDto extends PartialType(CreateDancerDto) {
  id: number;
}
