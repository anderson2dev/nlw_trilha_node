import {io} from '../http';

interface ICientFirstConnectedData {
    desciption: String;
    email: String;
}


io.on('connect', (socket) => {
    socket.on('client_first_access', ( => {
        console.log(param1, param2);
    });
})