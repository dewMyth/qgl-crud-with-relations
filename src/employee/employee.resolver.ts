/* eslint-disable prettier/prettier */
import {
  Query,
  Mutation,
  Resolver,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDTO } from './entities/create-employee.input';
import { Project } from 'src/project/entities/project.entity';

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

  // IMPORTANT - this method name ("project") should match the field name in the Employee entity where we define the relationship (which is also "project" line : 33)
  @ResolveField(() => Project)
  project(@Parent() employee: Employee) {
    // Since we need to pass projectId from the getEmployee, so getEmployee is the parent
    return this.employeeService.getEmployeeProject(employee.projectId);
  }
}
