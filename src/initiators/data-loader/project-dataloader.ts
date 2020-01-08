import DataLoader from 'dataloader';
import { Project, Image } from '../../entities';
import { getRepository, In } from 'typeorm';

const setLoader = (context) =>
  context.images = new DataLoader<number, Image[]>((ids: number[]) => batchFn(ids));

const batchFn = async (ids) => {
  const projects = await getRepository(Project).findByIds(ids, { relations: ['images'] });
  return projects.map(project => project.images);
}

export default setLoader;