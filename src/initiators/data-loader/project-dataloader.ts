import DataLoader from 'dataloader';
import { Project, Image } from '../../entities';
import { CustomContext } from './type';
import { getRepository } from 'typeorm';

const setLoader = (context: CustomContext) =>
  context.images = new DataLoader<number, Image[], number>((ids: number[]) => batchFn(ids));

const batchFn = async (ids: number[]) => {
  const projects = await getRepository(Project).findByIds(ids, { relations: ['images'] });
  return projects.map(project => project.images);
}

export default setLoader;