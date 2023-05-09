import express from "express";
import { AgentAuth } from "./Auth.js";

const router = express.Router();

const auth = () => {
  router.post("/agent/login", AgentAuth);
  return router;
};

export default auth;
