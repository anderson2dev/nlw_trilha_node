import SettingsRepository from '../domain/repositories/SettingsRepository';
import { ISettingsRequest, ISettingsResponse } from '../domain/interfaces/ISettings';
import { getCustomRepository } from 'typeorm';
import UserAlreadyExists from '../domain/errors/UserAlreadyExists';
import UserDoesNotExists from '../domain/errors/UserDoesNotExists';
import FieldsEmpty from '../domain/errors/FieldsEmpty';


class SettingsServices  {
    static async create({chat, username}: ISettingsRequest ): Promise<void> {
        try {
            const settingsRepository =  await getCustomRepository(SettingsRepository);
            const registeredSetting = await settingsRepository.findOne({
                where: {
                    username
                }
            });
            if(registeredSetting !== undefined)
                throw new UserAlreadyExists(username);
            await settingsRepository.createSetting({username, chat});
        } catch (e) {
            throw e;
        }
    }

    static async index(): Promise<Array<ISettingsResponse>| undefined>{
        try {
            const settingsRepository = await getCustomRepository(SettingsRepository);
            const result =  await settingsRepository.getAllSettings();
            return result;
        } catch (e) {
            throw e;
        }
    }

    static async update(old_user_name: String, {chat, username}: ISettingsRequest) {
        try {
            const requiredFields = new Array<String>();
            const settingsRepository = await getCustomRepository(SettingsRepository);
            const registeredSetting = await settingsRepository.findOne({
                where:{
                    username: old_user_name
                }
            });
            if(registeredSetting === undefined)
                throw new UserDoesNotExists(old_user_name);
            if (old_user_name === null)
                requiredFields.push("old_user_name");
            if (chat === null)
                requiredFields.push("chat");
            if (username === null)
                requiredFields.push("username");
            if (requiredFields.length !== 0) 
                throw new FieldsEmpty(requiredFields);
            await settingsRepository.update('oldusername',{
                chat,
                username
            });
        } catch (e) {
            throw e;
        }
    }
}

export default SettingsServices;