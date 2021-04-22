import express from 'express';
import router from './routes';
import "./domain/database";
const server  = express();
server.use(express.json());
server.use(router);
const port = process.env.PORT || 8080;
const environment = process.env.NODE_ENV || 'production';
server.listen(port, () => console.log(`Server is running on ${port} at ${environment}`));