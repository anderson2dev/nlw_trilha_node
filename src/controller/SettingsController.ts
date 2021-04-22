import { Request, Response } from 'express';

import SettingsServices from '../services/SettingsServices';

class SettingsController {

    async create(req: Request, res: Response) {
        const {chat, username} = req.body;
        try {
            await SettingsServices.create({chat, username});
            return res.sendStatus(200);
        } catch(error) {
            console.trace(error);
            return res.status(500).json({reason: error});
        }
    }

    async index(req: Request, res: Response) {
        try {
            const result = await SettingsServices.index();
            if (result === undefined) 
                return res.sendStatus(404);
            return res.status(200).json(result);
            
        } catch(e) {
            console.trace(e);
        }
        return res.sendStatus(500);
    }
}

export default SettingsController;