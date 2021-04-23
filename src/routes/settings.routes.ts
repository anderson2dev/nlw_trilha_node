import {Router} from 'express';
import SettingsController from '../domain/controller/SettingsController';


const settingsRouter = Router();
const settingsController = new SettingsController()

settingsRouter.get('/', settingsController.index);
settingsRouter.post('/', settingsController.create);
settingsRouter.put('/', SettingsController.update);


export default settingsRouter;