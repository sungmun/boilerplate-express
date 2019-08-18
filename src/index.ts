import { App } from './app';
import express from 'express';

const { server } = App.bootstart();

server.use(express);

export { server };
