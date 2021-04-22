import {MigrationInterface, QueryRunner} from "typeorm";

export class changeUpdatedAtOnSettings1619038811755 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(
                "ALTER TABLE settings"
                + " ALTER COLUMN updated_at"
                + " SET DEFAULT NOW()"
            );
        } catch (e) {
            console.trace(e);
        }
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(
                "ALTER TABLE settings"
                + " ALTER COLUMN updated_at"
                + " DROP DEFAULT"
            );
        } catch (e) {
            console.trace(e);
        }
    }

}
