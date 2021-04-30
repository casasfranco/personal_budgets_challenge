import express from "express";
import mysql from "mysql";
import cors from "cors";
import morgan from "morgan";

const PORT = process.env.PORT || 4000;
const app = express();

const connection = mysql.createConnection({
  host:  process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.use(cors());
app.options("*", cors());

//Middlewares
app.use(express.json());
app.use(morgan("tiny"));

//Routes

//database
connection.connect((error) => {
  if (error) throw error;
  else console.log("Database server running!");
});

//server
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
