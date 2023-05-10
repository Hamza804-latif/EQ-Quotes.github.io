import express from "express";
import { AgentAuth, SuperAgentAuth } from "./Auth.js";
import VerifyToken from "../middlewares/VerifyToken.js";
const router = express.Router();

const auth = () => {
  router.post("/agent/login", AgentAuth);
  router.post("/admin/login", SuperAgentAuth);
  router.post("/verifytoken", VerifyToken);
  return router;
};

export default auth;
