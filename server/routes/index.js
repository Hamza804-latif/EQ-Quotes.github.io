import express from "express";
import controllers from "../controllers/index.js";

const router = express.Router();

const routes = () => {
  router.use("/agent", controllers());
  return router;
};
export default routes;
