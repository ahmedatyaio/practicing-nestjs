import { ApiProperty } from '@nestjs/swagger';
import { IsEnum } from 'class-validator';
import { v4 as uuid } from 'uuid';

import { TaskStatus } from '../task.model';

export class UpdateTaskDto {
  @ApiProperty({ enum: TaskStatus })
  @IsEnum(TaskStatus, {
    message: `Status must be ${TaskStatus.OPEN}, ${TaskStatus.IN_PROGRESS} or ${TaskStatus.DONE}`,
  })
  status: TaskStatus;

  @ApiProperty({ default: uuid() })
  id: string;
}
