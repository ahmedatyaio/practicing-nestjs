import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task.model';

export class GetTaskFilterDto {
  @ApiProperty({ required: false })
  search?: string;

  @ApiProperty({ required: false })
  status?: TaskStatus;
}
