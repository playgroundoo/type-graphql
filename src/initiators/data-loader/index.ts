import setProjectLoader from './project-dataloader';
import setImageLoader from './image-dataloader';
import { CustomContext } from './type';
import { MiddlewareFn, ResolverData, ArgsDictionary } from 'type-graphql';
import { GraphQLResolveInfo } from 'graphql';

class CustomResolverData implements ResolverData {
  root: any;
  args: ArgsDictionary;
  info: GraphQLResolveInfo;
  context: CustomContext
}

// schema 별 data-loader를 추가한다.
const projectLoaders = [
  setProjectLoader,
  setImageLoader
];

const setLoader: MiddlewareFn = ({ context, info }: CustomResolverData, next): Promise<void> => {
  projectLoaders.map(loader => loader(context));
  return next();
}

export default setLoader;



