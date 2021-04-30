import express from "express";
import cors from "cors";
import morgan from "morgan";
require('dotenv/config.js');
import { connect } from "./connectionMysql.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.options("*", cors());

//Middlewares
app.use(express.json());
app.use(morgan("tiny"));

//Routes

//database
connect();


//server
app.listen(PORT, () => console.log(`Server runing on port ${PORT}`));
