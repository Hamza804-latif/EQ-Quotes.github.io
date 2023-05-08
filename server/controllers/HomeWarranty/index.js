import express from "express";
import { GetClients, SaveClient, SearchClient } from "./services.js";

const router = express.Router();
const HomeInsuranceRoute = () => {
  router.get("/", GetClients);
  router.post("/save", SaveClient);
  router.get("/:id", SearchClient);
  return router;
};

export default HomeInsuranceRoute;
