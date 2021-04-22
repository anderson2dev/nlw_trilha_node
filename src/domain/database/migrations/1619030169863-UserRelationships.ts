import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class UserRelationships1619030169863 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createForeignKey(
                'connections',
                new TableForeignKey({
                    name:'user_has_connection',
                    referencedTableName: 'users',
                    referencedColumnNames: [
                        'id'
                    ],
                    columnNames: [
                        'user_id'
                    ],
                    onDelete: 'restrict',
                    onUpdate: 'cascade'
                })
            )
        } catch (e) {
            console.trace(e);
        }
       
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
       
    }

}
