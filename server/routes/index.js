import express from "express";
import controllers from "../controllers/index.js";

const router = express.Router();

const routes = () => {
  router.use("/clients", controllers());
  return router;
};
export default routes;
