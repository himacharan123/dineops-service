//  OLD WAY 

// import { Options } from "@mikro-orm/core";
// import { MySqlDriver } from "@mikro-orm/mysql";

// const config: Options<MySqlDriver> = {
//     driver:MySqlDriver,// u have to specify the driver name
//     host: process.env.DB_HOST,
//     port: Number(process.env.DB_PORT) || 3306,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     dbName: process.env.DB_NAME,
//     entities: ['dist/**/*.entity.js'],
//     entitiesTs: ['src/**/*.entity.ts'],
//     debug: true,
// }

// export default config;

// NEW WAY
import 'dotenv/config'; 
import { defineConfig } from "@mikro-orm/mysql";

export default defineConfig({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    entities: ['dist/**/*.entity.js'],
    entitiesTs: ['src/**/*.entity.ts'],
    debug: true,
});

