import DataLoader from 'dataloader';
import { Project, Image } from '../../entities';
import { getRepository } from 'typeorm';

const getProjectsLoader = () =>
  // new DataLoader<number, Image[]>((ids: number[]) => batchFn(ids).then((data) => data.map(project => project.images)));
  new DataLoader<number, Image[]>((ids: number[]) => batchFn(ids));

const batchFn = async (ids) => {
  const projects = await getRepository(Project).findByIds(ids, { relations: ['images'] });
  return projects.map(project => project.images);
}

export default getProjectsLoader();