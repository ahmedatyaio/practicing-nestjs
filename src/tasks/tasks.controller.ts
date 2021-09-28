import { GetTaskFilterDto } from './dto/get-tasks-filter-dto';
import { UpdateTaskDto } from './dto/update-task-dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTaskDto } from './dto/create-task-dto';
import { Task } from './task.model';
import { TasksService } from './tasks.service';

@ApiTags('Tasks')
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getTasks(@Query() filterDto: GetTaskFilterDto): Task[] {
    if (Object.keys(filterDto).length) {
      return this.tasksService.getTasksWithFilters(filterDto);
    }

    return this.tasksService.getAllTasks();
  }

  @Get('/:id')
  getTask(@Param('id') id: string): Task {
    return this.tasksService.getTask(id);
  }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Patch('/:id/status')
  updateStatus(@Body() updateTaskDto: UpdateTaskDto): Task {
    return this.tasksService.updateTask(updateTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): void {
    return this.tasksService.deleteTask(id);
  }
}
