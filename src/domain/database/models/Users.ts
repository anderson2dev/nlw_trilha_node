import {Entity, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn} from 'typeorm';

@Entity('users')
class Users {
    @PrimaryGeneratedColumn()
    id: String;
    
}