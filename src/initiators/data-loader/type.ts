import DataLoader from 'dataloader';
import { Image, ImageSource } from '../../entities';

export type CustomContext = {
  images: DataLoader<number, Image[], number>;
  imageSources: DataLoader<number, ImageSource[], number>;
}
