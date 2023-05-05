import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import DatabaseServer from "./database/index.js";
import routes from "./routes/index.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const NodeServer = () => {
  DatabaseServer();
  app.use(cors());
  app.use(express.json());
  app.use(routes());

  app.listen(PORT, () => {
    console.log(`Server is live on http://localhost:${PORT}`);
  });
};

NodeServer();
