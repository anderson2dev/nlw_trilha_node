import {MigrationInterface, QueryRunner} from "typeorm";

export class fixCreatedAtInMessages1619127521861 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(
                "ALTER TABLE messages "
                + "ALTER COLUMN created_at "
                + "SET DEFAULT NOW()"

            );

            await queryRunner.query(
                "ALTER TABLE messages "
                + "ALTER COLUMN admin_id "
                + "DROP NOT NULL"
            );
        } catch (e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(
                "ALTER TABLE messages "
                + "ALTER COLUMN created_at "
                + "DROP DEFAULT NOW()"
            );
            await queryRunner.query(
                "ALTER TABLE messages "
                + "ALTER COLUMN admin_id "
                + "SET NOT NULL"
            )
        } catch (e) {
            console.trace(e);
        }
    }

}
