import { server } from './app';

const app = server;

app.listen(3000, () => console.log('start'));

export { app };
