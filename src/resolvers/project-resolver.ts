import { Resolver, Query, FieldResolver, Root, Ctx } from "type-graphql";
import { Project } from "../entities";
import { getRepository } from "typeorm";

@Resolver(Project)
export class ProjectResolver {

  @Query((type) => [ Project ])
  public async projects() {
    const projects = await getRepository(Project).find();
    return projects;
  }

  @FieldResolver()
  public images(@Root() project: Project, @Ctx() ctx) {
    return ctx.images.load(project.id);
  }
}