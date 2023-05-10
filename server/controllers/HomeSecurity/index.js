import express from "express";
import { GetClients, SaveClient, SearchClient } from "./services.js";

const router = express.Router();
const HomeSecurityRoute = () => {
  router.get("/", GetClients);
  router.post("/save", SaveClient);
  router.get("/:id", SearchClient);
  return router;
};

export default HomeSecurityRoute;