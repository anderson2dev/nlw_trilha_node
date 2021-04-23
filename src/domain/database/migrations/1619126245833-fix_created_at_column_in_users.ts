import {MigrationInterface, QueryRunner} from "typeorm";

export class fixCreatedAtColumnInUsers1619126245833 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(
                "ALTER TABLE users "
                + "ALTER COLUMN created_at "
                + "SET DEFAULT NOW()"

            );
        } catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(
                "ALTER TABLE users "
                + "ALTER COLUMN created_at "
                + "DROP DEFAULT NOW()"

            );
        } catch (e) {
            console.trace(e);
        }
    }

}
