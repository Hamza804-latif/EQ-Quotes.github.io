import mongoose from "mongoose";
import { homeWarranty } from "../../database/models/clients.js";

export const GetClients = (req, resp) => {
  console.log(req.body);
  resp.send("inside get");
};

export const SearchClient = (req, resp) => {
  resp.send("inside post");
};
export const SaveClient = async (req, resp) => {
  let homeWarrantySchema = new homeWarranty(req.body);
  let savedData = await homeWarrantySchema.save();
  console.log(savedData);
};
