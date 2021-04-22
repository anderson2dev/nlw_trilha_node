import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class messages1619029831897 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: 'messages',
                columns: [
                    {
                        type: 'varchar', name: 'id', isPrimary: true,
                        generationStrategy: 'uuid', default: 'uuid_generate_v4()'
                    },
                    {
                        type: 'varchar', name: 'admin_id'
                    },
                    {
                        type: 'varchar', name: 'user_id'
                    },
                    {
                        type: 'text', name: 'message'
                    },

                    {
                        type: 'timetz', name: 'created_at'
                    }
                ]
            }), true);
        } catch(e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable('messages', true);
        } catch(e) {
            console.trace(e);
        }
    }

}
