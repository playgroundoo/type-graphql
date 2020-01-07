import { Image } from '../entities';
import { Resolver, FieldResolver, Root, Ctx, Query } from 'type-graphql';
import setLoader from './data-loaders';
import { getRepository } from 'typeorm';

@Resolver(Image)
export class ImageResolver {

  @Query((type) => [Image])
  public async images(@Ctx() ctx) {
    setLoader(ctx);
    const projects = await getRepository(Image).find();
    return projects;
  }

  @FieldResolver()
  public imageSources(@Root() image: Image, @Ctx() ctx) {
    return ctx.dataloader.imageSources.load(image.id);
  }
}