import "reflect-metadata"
import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { dirname } from "path"


///----------------------------------------------------------

dotenv.config()

export const dataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    // entities: [`${__dirname}/../models/**/*{.ts,.js}`],
    // synchronize: false,
    // logging: false,
    // subscribers: [],
    migrations: [`${__dirname}/migrations/**/*{.ts,.js}`],
})