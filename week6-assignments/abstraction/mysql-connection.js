export class MySqlConnection {
    connect() {
        console.log("MySql DB is connected");
    }
    disconnect() {
        console.log("MySql DB is disconnected");
    }
    executeUpdate() {
        console.log("MySql DB update executed");
    }
    executeQuery() {
        console.log("MySql DB query executed");
    }
}
