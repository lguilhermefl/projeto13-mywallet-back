import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const server = express();
server.use(express.json());
server.use(cors());

server.use(router);

const PORT = process.env.PORT || 5000;

server.listen(PORT);