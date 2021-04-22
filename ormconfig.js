const connection = {
    
    type: "postgres",
    host: "localhost",
    port: "6000",
    username: "nlw_05",
    password: "nlw_05_next_level",
    database: "nlw_05_production",
    migrations: [
        "./src/domain/database/migrations/*.ts"
    ],
    entities: [
        "./src/domain/database/models/*.ts"
    ],
    cli: {
        migrationsDir: "./src/domain/database/migrations"
    }
    
};

if (process.env.NODE_ENV === "dev") {
    Object.assign(connection, {
        database: "nlw_05_dev"
    })
}

module.exports = connection;