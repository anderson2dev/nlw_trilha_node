import {http} from './http';
import './websocket/Client';
import './websocket/Admin';

const port = process.env.PORT || 8080;
const environment = process.env.NODE_ENV || 'production';
// Creating an server with express
http.listen(port, () => console.log(
        `Server is running on ${port} at ${environment}`
));

//Attaching him to the io




