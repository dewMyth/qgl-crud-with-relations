/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDTO } from './entities/create-employee.input';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}

  async findAllEmployees(): Promise<Employee[]> {
    return await this.employeeRepository.find();
  }

  async createEmployee(employee: EmployeeCreateDTO): Promise<Employee> {
    return await this.employeeRepository.save(employee);
  }
}
