import {getCustomRepository} from 'typeorm';
import UsersRepository from '../domain/repositories/UsersRepository';
import { IUserRequest, IUserResponse } from '../domain/interfaces/IUserInterface';
import FieldsEmpty from '../domain/errors/FieldsEmpty';
import UserAlreadyExists from '../domain/errors/UserAlreadyExists';
import UserRole from '../domain/database/models/UserRole';


class UsersServices {
    static async index(): Promise<Array<IUserResponse> | undefined>{
        try {
            const usersRepository= await getCustomRepository(UsersRepository);
            const users:  Array<IUserResponse> | undefined = await usersRepository.findAllUsers();
            return users;
        } catch (e) {
            throw e;
        }
    }

    static async create({role, email}: IUserRequest) {
        const requiredFields: Array<String> =  new Array<String>();
        try {
            const usersRepository = await getCustomRepository(UsersRepository);
            if(email === null)
                requiredFields.push("email");
            if(requiredFields.length !== 0) {
                throw new FieldsEmpty(requiredFields);
            }
            if(await usersRepository.userExists({email}))
                throw new UserAlreadyExists(email);
            let parsedRole: UserRole | null = role?.toLowerCase() === "admin" ? 
                UserRole.ADMIN : UserRole.CLIENT;
            await usersRepository.createUser({email, role: parsedRole});
    
        } catch (e) {
            throw e;
        }    

    }
}

export default UsersServices;