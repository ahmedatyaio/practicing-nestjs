import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatus } from '../task-status.enum';

export class GetTaskFilterDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsEnum(TaskStatus, {
    message: `Status must be ${TaskStatus.OPEN}, ${TaskStatus.IN_PROGRESS} or ${TaskStatus.DONE}`,
  })
  status?: TaskStatus;
}
