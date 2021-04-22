const connection = {
    
    type: "postgres",
    host: "localhost",
    port: "6000",
    username: "nlw_05",
    password: "nlw_05_next_level",
    database: "nlw_05_production",
    migrations: [
        "./src/database/migrations/*.ts"
    ],
    entities: [
        "./src/database/models/*.ts"
    ],
    cli: {
        migrationsDir: "./src/database/migrations"
    }
    
};

if (process.env.NODE_ENV === "dev") {
    Object.assign(connection, {
        database: "nlw_05_dev"
    })
}

module.exports = connection;