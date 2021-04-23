import  {getCustomRepository} from 'typeorm';
import {IMessageRequest, IMessageResponse} from '../domain/interfaces/IMessages';
import MessagesRepository from '../domain/repositories/MessagesRepository';


class MessagesServices {

    static async index(user_id: String) {
        try {
            const messagesRepository =  getCustomRepository(MessagesRepository);
            const messages = await messagesRepository.findAllMessagesByUser(user_id);
            return messages;
        } catch (e) {
            throw e;
        }
    }

    static async create ({user_id, message}:IMessageRequest) {
        try {   
            const messagesRepository = getCustomRepository(MessagesRepository);
            const messageEntity = messagesRepository.create({message, user_id});
            const {id} = await messagesRepository.save(messageEntity);
            return id;
        } catch(e) {
            throw e;
        }
    }
}

export default MessagesServices;