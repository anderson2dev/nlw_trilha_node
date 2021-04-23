import Users from './Users';
import  {
    Entity, CreateDateColumn, PrimaryGeneratedColumn, 
    Column, ManyToOne, JoinColumn,
} from 'typeorm';

@Entity('messages')
class Message {
    @PrimaryGeneratedColumn()
    id: String;
    @JoinColumn({name: "user_id"})
    @ManyToOne(() => Users)
    user: Users;
    @Column()
    user_id: String;
    @Column()
    message: String;
    @CreateDateColumn()
    created_at: Date;

}

export default Message;