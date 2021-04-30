import express from "express";
import mysql from "mysql";
import cors from "cors";

// const bodyParser = require("body-parser");

const PORT = process.env.PORT || 4000;

const app = express();

app.use(cors());

app.use(express.json());