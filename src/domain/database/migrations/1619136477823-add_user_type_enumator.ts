import {MigrationInterface, QueryRunner} from "typeorm";

export class addUserTypeEnumator1619136477823 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(
                "CREATE TYPE user_roles as ENUM ( " +
                "'admin', " +
                "'client' " +
                ");"
            );
            await queryRunner.query(
                "ALTER TABLE users ADD COLUMN role user_roles NOT NULL DEFAULT 'client';"
                + "ALTER TABLE messages DROP COLUMN admin_id;"
            );
        } catch(e) {
            console.trace(e);
        }
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        try {
            await queryRunner.query(
                "ALTER TABLE user DROP COLUMN roles;"
                + "ALTER TABLE messages ADD COLUMN admin_id VARCHAR;"
                );
            await queryRunner.query(
                "DROP TYPE user_roles;"
            );
        } catch(e) {
            console.trace(e);
        }
    }

}
