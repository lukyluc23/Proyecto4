import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateAppointmentsTable1712492326878 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "appointments",
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "user_id",
                        type: "int",
                    },
                    {
                        name: "artist_id",
                        type: "int",
                    },
                    {
                        name: "tattoo_id",
                        type: "int",
                    },
                    {
                        name: "date",
                        type: "datetime",
                      },
                    {
                        name: "status",
                        type: "boolean",
                        default: false,
                    },
                    {
                        name: "created",
                        type: "datetime",

                    },
                    {
                        name: "updated",
                        type: "datetime",

                    },

                ],
                foreignKeys: [
                    {
                      columnNames: ["user_id"],
                      referencedTableName: "users",
                      referencedColumnNames: ["id"],
                      onDelete: "CASCADE",
                    },
                    {
                      columnNames: ["artist_id"],
                      referencedTableName: "tattoo_artists",
                      referencedColumnNames: ["id"],
                      onDelete: "CASCADE",
                    },
                    {
                      columnNames: ["tattoo_id"],
                      referencedTableName: "tattoos",
                      referencedColumnNames: ["id"],
                      onDelete: "CASCADE",
                    },
                  ],

            }),
            true
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("appointments")
    }
}
