import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1619029140903 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: 'users',
                columns: [
                    {
                        type: 'varchar', name: 'id', isPrimary: true,
                        generationStrategy: 'uuid', default: 'uuid_generate_v4()'
                    },
                    {
                        type: 'varchar', name: 'email'
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
            await queryRunner.dropTable('users', true);
        } catch(e) {
            console.trace(e);
        }
    }

}
