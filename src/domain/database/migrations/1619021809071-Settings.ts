import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Settings1619021809071 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createTable(new Table({
                name: 'settings',
                columns: [
                    {
                        type: 'varchar',
                        name: 'id',
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                        isPrimary: true
                    },
                    {
                        type: 'varchar',
                        name: 'username',
                    },
                    {
                        type: 'boolean',
                        name: 'chat',
                        default: true
                    },
                    {
                        name: 'created_at',
                        type: 'timetz',
                        default: 'NOW()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timetz',
                        default: 'NOW()',
                        onUpdate: 'NOW()'
                    }


                ]
            }), true);
        } catch(e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable('settings', true);

        } catch(e) {
            console.trace(e);
        }
    }

}
