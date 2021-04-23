import {EntityRepository, Repository} from 'typeorm';
import Users from '../database/models/Users';
import { IUserRequest, IUserResponse } from '../interfaces/IUserInterface';

@EntityRepository(Users)
class UsersRepository extends Repository<Users> {
    async userExists({ email }:IUserRequest): Promise<Boolean> {
        try {
            const registeredUser = await this.findOne({
                where: {
                    email
            }
            });
            console.log(registeredUser);
            return registeredUser !== undefined ? true : false;
        } catch (e) {
            throw e;
        }
    }

    async findAllUsers(): Promise<Array<IUserResponse>|undefined> {
        try {
            const users: Array<IUserResponse> | undefined = await this.query('select * from users');
            return users;
        } catch (e) {
            throw e;
        }
    }

    async createUser({email, role}:IUserRequest) {
        const user =  this.create({email, role});
        try {
            await this.save(user);
        } catch(e) {
            throw e;
        }
    }
}

export default UsersRepository;