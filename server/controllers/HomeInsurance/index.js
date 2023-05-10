import express from "express";
import {
  GetClients,
  SaveClient,
  SearchClient,
  DeleteClient,
} from "./services.js";

const router = express.Router();
const HomeWarrantyRoute = () => {
  router.get("/", GetClients);
  router.post("/save", SaveClient);
  router.get("/:id", SearchClient);
  router.delete("/:id", DeleteClient);
  return router;
};

export default HomeWarrantyRoute;
