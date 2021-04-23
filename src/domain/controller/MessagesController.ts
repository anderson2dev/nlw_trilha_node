import {Request, Response } from 'express';
import MessagesServices from '../../services/MessagesServices';
import { IMessageRequest } from '../interfaces/IMessages';


class MessagesController {

    static async index(req: Request, res: Response) {
        const user_id: String = String(req.params.user_id);
        try {
           const messages = await MessagesServices.index(user_id); 
           return res.status(200).json(messages);
        } catch (e) {
            console.trace(e);
            return res.status(500).json({message: e});
        }
    }

    static async create(req: Request, res: Response) {
        const {user_id, message}: IMessageRequest = req.body;
        try {
            const message_id = await MessagesServices.create({user_id, message});
            if(message_id !== null) {
                return res.sendStatus(200);
            }
            return res.sendStatus(500);
        }catch(e) {
            console.trace(e);
            return res.status(500).json({message: e});
        }

    }
}

export default MessagesController;