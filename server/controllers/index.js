import express from "express";
import HomeSecurityRoute from "./HomeSecurity/index.js";
import HomeWarrantyRoute from "./HomeWarranty/index.js";
import HomeInsuranceRoute from "./HomeInsurance/index.js";
import SolarRoute from "./Solar/index.js";

const router = express.Router();

const controller = () => {
  router.use("/homesecurity", HomeSecurityRoute());
  router.use("/homewarranty", HomeWarrantyRoute());
  router.use("/homeinsurance", HomeInsuranceRoute());
  router.use("/solar", SolarRoute());

  return router;
};

export default controller;
