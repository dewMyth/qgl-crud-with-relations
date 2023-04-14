/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}

  async createProject(
    createProjectInput: CreateProjectInput,
  ): Promise<Project> {
    return await this.projectRepository.save(createProjectInput);
  }

  async findAllProjects(): Promise<Project[]> {
    return await this.projectRepository.find();
  }

  async findProjectById(id: string): Promise<Project> {
    return await this.projectRepository.findOne({
      where: { id },
    });
  }

  async updateProject(
    id: string,
    updateProjectInput: CreateProjectInput,
  ): Promise<UpdateResult> {
    return await this.projectRepository.update(id, updateProjectInput);
  }

  async removeProject(id: string): Promise<DeleteResult> {
    return await this.projectRepository.delete(id);
  }
}
