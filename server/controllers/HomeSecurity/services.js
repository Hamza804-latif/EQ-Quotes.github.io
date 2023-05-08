import mongoose from "mongoose";
import { homeSecurity } from "../../database/models/clients.js";

export const GetClients = (req, resp) => {
  console.log(req.body);
  resp.send("inside get");
};

export const SearchClient = (req, resp) => {
  resp.send("inside post");
};
export const SaveClient = async (req, resp) => {
  let homeSecuritySchema = new homeSecurity(req.body);
  let savedData = await homeSecuritySchema.save();
  console.log(savedData);
};
