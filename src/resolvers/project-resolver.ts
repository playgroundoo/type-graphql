import { Resolver, Query, FieldResolver, Root } from "type-graphql";
import { Project, Image } from "../entities";
import { getRepository } from "typeorm";
import imagesLoader from './utils/project-dataloader';
import DataLoader from 'dataloader';

@Resolver(Project)
export class ProjectResolver {

  @Query((type) => [ Project ])
  public async projects() {
    const projects = await getRepository(Project).find();
    return projects;
  }

  @FieldResolver()
  public images(@Root() project: Project) {
    return imagesLoader.load(project.id);
    /*
    const loader = await imagesLoader();
    return loader.load(project.id);
    */
    // return this.loader.load(project.id);
  }
}