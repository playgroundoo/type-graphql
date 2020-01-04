import initApp from './app';

(async () => {
  const app = await initApp();

  app.listen(3000, () => {
    console.log(`start type-graphql`);
  });
})();