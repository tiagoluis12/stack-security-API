import express from "express";
const app = express();

const dotenvsafe = require("dotenv-safe").config();

import cors from "cors";
app.use(cors());

app.use(express.json());

import db from "./config/database.js";
db.connect();

// the principal route of the project
import routes from "./routes/userRoutes.js";
app.use("/users", routes);

export default app;
