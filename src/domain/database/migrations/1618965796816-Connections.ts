import {MigrationInterface, QueryRunner, Table} from "typeorm";


export class Connections1618965796816 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";');
            await queryRunner.createTable(new Table({
                name: "connections",
                columns: [
                    { 
                        type: "varchar", name: "id", generationStrategy: 'uuid', 
                        default: "uuid_generate_v4()", isPrimary: true 
                    },
                    {
                        type: "varchar", name: "user_id", isNullable: true
                    },
                    {
                        type: "timetz", name: "updated_at", onUpdate: "NOW()",
                    },
                    {
                        type: "timetz", name: "created_at",  default: "NOW()"
                    }
                ]
            }), true);
        } catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropTable('connections', true);
        } catch(e) {
            console.trace(e)
        }
    }

}
