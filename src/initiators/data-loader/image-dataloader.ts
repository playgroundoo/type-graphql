import DataLoader from 'dataloader';
import { Image, ImageSource } from '../../entities';
import { getRepository } from 'typeorm';

const setLoader = (context) =>
  context.imageSources = new DataLoader<number, ImageSource[]>((ids: number[]) => batchFn(ids))

const batchFn = async (ids) => {
  const images = await getRepository(Image).findByIds(ids, { relations: ['imageSources'] });
  return images.map(image => image.imageSources);
}

export default setLoader;