/* eslint-disable prettier/prettier */
import { Query, Mutation, Resolver, Args } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './entities/create-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAllEmployees() {
    return this.employeeService.findAllEmployees();
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  createEmployee(@Args('employeeCreateInput') employee: EmployeeCreateDTO) {
    return this.employeeService.createEmployee(employee);
  }
}
