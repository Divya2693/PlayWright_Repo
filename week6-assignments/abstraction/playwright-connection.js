import { MySqlConnection } from "./mysql-connection.js";
class PlaywrightConnection extends MySqlConnection {
    playWrightConnection() {
        console.log("playWrightConnection is established");
    }
}
const objPlaywright = new PlaywrightConnection();
objPlaywright.connect();
objPlaywright.disconnect();
objPlaywright.executeUpdate();
objPlaywright.executeQuery();
objPlaywright.playWrightConnection();
