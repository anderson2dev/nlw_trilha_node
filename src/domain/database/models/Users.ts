import {Entity, PrimaryGeneratedColumn,CreateDateColumn, Column} from 'typeorm';
import UserRole from './UserRole';

@Entity('users')
class Users {
    @PrimaryGeneratedColumn()
    id: String;
    @Column()
    email: String;
    @Column({
        type: "enum",
        enum: UserRole,
        default: UserRole.CLIENT
    })
    role?: UserRole;
    @CreateDateColumn()
    created_at: Date;   
}

export default Users;