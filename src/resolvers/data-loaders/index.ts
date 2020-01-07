import setProjectLoader from './project-dataloader';
import setImageLoader from './image-dataloader';

export default (ctx) =>
  ctx.dataloader = Object.assign({}, setProjectLoader(), setImageLoader())