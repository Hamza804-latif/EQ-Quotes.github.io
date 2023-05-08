import mongoose from "mongoose";
import { Solar } from "../../database/models/clients.js";

export const GetClients = (req, resp) => {
  console.log(req.body);
  resp.send("inside get");
};

export const SearchClient = (req, resp) => {
  resp.send("inside post");
};
export const SaveClient = async (req, resp) => {
  let SolarSchema = new Solar(req.body);
  let savedData = await SolarSchema.save();
  console.log(savedData);
};
