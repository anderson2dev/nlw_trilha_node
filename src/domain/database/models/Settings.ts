import {Entity, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('settings')
class Settings  {
    @PrimaryGeneratedColumn()
    id: String;
    @Column({name: 'username'})
    username: String;
    @Column({default: true})
    chat?: Boolean;
    @CreateDateColumn()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}

export default Settings;