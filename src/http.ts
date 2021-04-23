import express from 'express';
import router from './routes';
import {createServer} from 'http';
import {Server, Socket} from 'socket.io';
import path from 'path';
import "./domain/database";

const app  = express();
/** Setting view template engine */
app.use(express.static(path.join('__dirname', '..', '/public')));
app.set("views",  path.join('__dirname', '..', '/public'));
app.engine("html", require('ejs').renderFile);
app.set("view engine", "html");

app.get('/pages/client', (request, response) => {
    return response.render("../public/html/client.html")
})



app.use(express.json());
app.use(router);

const http = createServer(app);
const io = new Server(http);

export {http, io};