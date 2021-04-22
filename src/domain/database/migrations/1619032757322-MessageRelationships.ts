import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class MessageRelationships1619032757322 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.createForeignKey(
                'messages',
                new TableForeignKey({
                    name: 'user_has_messages',
                    referencedTableName: 'users',
                    columnNames: [
                        'user_id'
                    ],
                    referencedColumnNames: [
                        'id'
                    ],
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                })
            );
        } catch(e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.dropForeignKey('messages', 'user_has_messages');
        }catch(e){
            console.trace(e);
        }
    }

}
