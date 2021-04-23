import { EntityRepository, Repository } from 'typeorm';
import Messages from '../database/models/Messages';

@EntityRepository(Messages)
class MessagesRepository extends Repository<Messages>{

    async findAllMessages() {
        try {
            const messages = await this.find();
            return messages;
        } catch (e) {
            throw e;
        }
    }

    async findAllMessagesByUser(id: String) {
        try {
            const messages = await this.find({
                where: {
                    user_id: id
                },
                relations: ["user"]
            });
            return messages;
        } catch (e) {
            throw e;
        }
    }
}

export default MessagesRepository;