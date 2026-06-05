import { DatabaseConnection } from "./database-connection.js";

export abstract class MySqlConnection implements DatabaseConnection {
    connect(): void {
        console.log("MySql DB is connected")
    }

    disconnect(): void {
        console.log("MySql DB is disconnected")
    }

    executeUpdate(): void {
        console.log("MySql DB update executed")
    }

    executeQuery() : void {
        console.log("MySql DB query executed")
    }
}