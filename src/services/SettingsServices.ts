import SettingsRepository from '../domain/repositories/SettingsRepository';
import { ISettingsRequest, ISettingsResponse } from '../domain/interfaces/ISettings';
import { getCustomRepository } from 'typeorm';


class SettingsServices  {
    static async create({chat, username}: ISettingsRequest ) {
        try {
            const settingsRepository =  await getCustomRepository(SettingsRepository);
            await settingsRepository.createSetting({username, chat});
        } catch (e) {
            throw e;
        }
    }

    static async index(): Promise<Array<ISettingsResponse>| undefined>{
        try {
            const settingsRepository = await getCustomRepository(SettingsRepository);
            const result =  await  settingsRepository.getAllSettings();
            return result;
        } catch (e) {
            throw e;
        }
    }
}

export default SettingsServices;