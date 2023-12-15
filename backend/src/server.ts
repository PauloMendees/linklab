import { app } from './app';

async function run() {
  app.listen(process.env.PORT || 8080, () =>
    console.log('Server running fine on port 8080.'),
  );
}

run().catch(console.error);
