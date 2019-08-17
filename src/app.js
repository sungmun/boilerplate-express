import express from 'express';
import { route } from './router';

const server = express();

server.use(express.json());
server.use(route);

export { server };
