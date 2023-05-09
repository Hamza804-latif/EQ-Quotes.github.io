import express from "express";
import controllers from "../controllers/index.js";
import auth from "../authControllers/index.js";

const router = express.Router();

const routes = () => {
  router.use("/agent", controllers());
  router.use("/auth", auth());
  return router;
};
export default routes;
