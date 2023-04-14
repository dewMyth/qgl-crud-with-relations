/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeResolver } from './employee.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { ProjectModule } from 'src/project/project.module';

@Module({
  imports: [
    ProjectModule,
    TypeOrmModule.forFeature([Employee]), // To use EmployeeRepository in this module
  ],
  providers: [EmployeeService, EmployeeResolver],
})
export class EmployeeModule {}
