import {Router} from 'express';
import SettingsController from '../controller/SettingsController';


const settingsRouter = Router();
const settingsController = new SettingsController()

settingsRouter.get('/', settingsController.index);
settingsRouter.post('/', settingsController.create);


export default settingsRouter;