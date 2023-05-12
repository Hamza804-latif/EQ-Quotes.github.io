import express from "express";
import {
  GetClients,
  SaveClient,
  SearchClient,
  DeleteClient,
  UpdateData,
} from "./services.js";

const router = express.Router();
const HomeSecurityRoute = () => {
  router.get("/", GetClients);
  router.post("/save", SaveClient);
  router.get("/:id", SearchClient);
  router.delete("/:id", DeleteClient);
  router.put("/:id", UpdateData);

  return router;
};

export default HomeSecurityRoute;
