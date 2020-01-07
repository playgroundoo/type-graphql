import { Resolver, Query, FieldResolver, Root, Ctx } from "type-graphql";
import { Project } from "../entities";
import { getRepository } from "typeorm";
import setLoader from './data-loaders';

@Resolver(Project)
export class ProjectResolver {

  @Query((type) => [ Project ])
  public async projects(@Ctx() ctx) {
    setLoader(ctx);
    const projects = await getRepository(Project).find();
    return projects;
  }

  @FieldResolver()
  public images(@Root() project: Project, @Ctx() ctx) {
    return ctx.dataloader.images.load(project.id);
  }
}