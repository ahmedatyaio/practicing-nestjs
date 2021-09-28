import { ApiProperty } from '@nestjs/swagger';
import { TaskStatus } from '../task.model';

export class UpdateTaskDto {
  @ApiProperty()
  status: TaskStatus;

  @ApiProperty()
  id: string;
}
