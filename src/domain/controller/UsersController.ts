import  {Request, Response} from 'express';
import UsersServices from '../../services/UsersServices';
import { IUserRequest } from '../interfaces/IUserInterface';

class UsersController {
    static async index(req: Request, res: Response) {
        try {
            const users = await UsersServices.index();
            if (users === undefined || users.length !== 0 )
                return res.status(200).json(users);
            return res.status(404).json({message: "no users found"});
        } catch (e) {
            console.trace(e);
            return res.status(500).json({message: e});
        }
    }

    static async create(req: Request, res: Response) {
        const {email, role}:IUserRequest = req.body;
        try {
            await UsersServices.create({role, email});
            return res.sendStatus(200);
        } catch (e) {
            console.trace(e);
            return res.status(500).json({message: e});
        }
    }
}

export default UsersController;