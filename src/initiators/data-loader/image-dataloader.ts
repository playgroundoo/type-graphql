import DataLoader from 'dataloader';
import { Image, ImageSource } from '../../entities';
import { getRepository } from 'typeorm';
import { CustomContext } from './type';

const setLoader = (context: CustomContext) =>
  context.imageSources = new DataLoader<number, ImageSource[], number>((ids: number[]) => batchFn(ids))

const batchFn = async (ids: number[]) => {
  const images = await getRepository(Image).findByIds(ids, { relations: ['imageSources'] });
  return images.map(image => image.imageSources);
}

export default setLoader;