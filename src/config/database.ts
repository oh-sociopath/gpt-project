import { DataSource } from 'typeorm';
import 'dotenv/config';

type db_type = 'postgres'

class Database {
    private dataSource;

    constructor() {
        this.dataSource = new DataSource({
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: ["src/entity/**/*.ts"],
            synchronize: true
        })
    }

    async initialize() {
        return this.dataSource.initialize();
    }

    getRepository(entity: any) {
        return this.dataSource.getRepository(entity)
    }
}

export const database = new Database();
