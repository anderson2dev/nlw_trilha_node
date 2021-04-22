import Settings from '../database/models/Settings';
import {EntityRepository, Repository} from 'typeorm';
import { ISettingsRequest, ISettingsResponse } from '../interfaces/ISettings';

@EntityRepository(Settings)
class SettingsRepository extends Repository<Settings> {
    
    async getAllSettings() : Promise<Array<ISettingsResponse> | undefined>{
        try {
            const settings: Array<ISettingsResponse> | undefined = await this.query('select * from settings');
            return settings;
        } catch (e) {
            throw e;
        } 
    }
    
    async createSetting({username, chat}: ISettingsRequest): Promise<void>{
        try {
            const setting = await this.create({username, chat});
            await this.save(setting);
        } catch(e) {
            throw e;
        }
    }
}

export default SettingsRepository;
