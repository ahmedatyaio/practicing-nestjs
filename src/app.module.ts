import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from './tasks/tasks.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      database: 'taskmanagement',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      autoLoadEntities: true,
      logging: true,
      synchronize: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
