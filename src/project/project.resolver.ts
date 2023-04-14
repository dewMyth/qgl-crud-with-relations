import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { DeleteResult, UpdateResult } from 'typeorm';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project, { name: 'createProject' })
  createProject(
    @Args('createProjectInput') createProjectInput: CreateProjectInput,
  ) {
    return this.projectService.createProject(createProjectInput);
  }

  @Query(() => [Project], { name: 'getAllProjects' })
  findAll(): Promise<Project[]> {
    return this.projectService.findAllProjects();
  }

  @Query(() => Project, { name: 'getProjectById' })
  findOne(@Args('id') id: string): Promise<Project> {
    return this.projectService.findProjectById(id);
  }

  @Mutation(() => Project, { name: 'updateProject' })
  updateProject(
    @Args('projectId') projectId: string,
    @Args('updateProjectInput') updateProjectInput: CreateProjectInput,
  ): Promise<UpdateResult> {
    return this.projectService.updateProject(projectId, updateProjectInput);
  }

  @Mutation(() => Project)
  removeProject(@Args('id') id: string): Promise<DeleteResult> {
    return this.projectService.removeProject(id);
  }
}
