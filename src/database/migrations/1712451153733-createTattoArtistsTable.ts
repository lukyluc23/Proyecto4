import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTattoArtistsTable1712451153733 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "tattoo_artists",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "50",
                    },
                    {
                        name: "password",
                        type: "varchar",
                        length: "100",
                        isUnique: true,
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "255",
                    },
                    {
                        name: "photography",
                        type: "varchar",
                        length: "2500",
                        default: '"photo"',
                    },
                    {
                        name: "role",
                        type: "enum",
                        enum: ["user", "admin", "super_admin"],
                        default: '"admin"',
                    },
                    {
                        name: "created_at",
                        type: "datetime",

                    },
                    {
                        name: "updated_at",
                        type: "datetime",

                    },
                    
                ],
            
            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("tattoo_artists")
    }

}
