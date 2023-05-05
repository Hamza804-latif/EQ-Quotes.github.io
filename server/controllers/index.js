import express from "express";
import {
  GetClients,
  SaveClient,
  SearchClient,
} from "./clientsControllers/index.js";
const router = express.Router();

const controller = () => {
  router.get("/", GetClients);
  router.post("/save", SaveClient);
  router.post("/search/:id", SearchClient);
  return router;
};

export default controller;
