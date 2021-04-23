import {Router} from 'express';
import MessagesController from '../domain/controller/MessagesController';


const messagesRouter = Router();

messagesRouter.get('/:user_id/', MessagesController.index);
messagesRouter.post('/', MessagesController.create);

export default messagesRouter;