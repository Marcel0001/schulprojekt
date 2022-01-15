import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCustomer1642283605991 implements MigrationInterface {
    name = 'CreateCustomer1642283605991'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`customer\` (\`id\` int NOT NULL AUTO_INCREMENT, \`kdnr\` int NOT NULL, \`benutzerName\` varchar(255) NOT NULL, \`tarifModell\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`customer\``);
    }

}
