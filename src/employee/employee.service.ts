/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './entities/create-employee.input';
import { ProjectService } from 'src/project/project.service';
import { Project } from 'src/project/entities/project.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private projectService: ProjectService,
  ) {}

  async findAllEmployees(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async createEmployee(employee: EmployeeCreateDTO): Promise<Employee> {
    return await this.employeeRepository.save(employee);
  }

  async getEmployeeProject(id: string): Promise<Project> {
    return await this.projectService.findProjectById(id);
  }
}
