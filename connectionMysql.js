import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "personalbudgets",
});

export function connect() {
  connection.connect((error) => {
    if (error) throw error;
    else console.log("Database server running!");
  });
}
