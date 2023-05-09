import mongoose from "mongoose";
import { homeSecurity } from "../../database/models/clients.js";

export const GetClients = async (req, resp) => {
  let data = await homeSecurity.find({});
  resp.json(data);
};

export const SearchClient = async (req, resp) => {
  try {
    let result = await homeSecurity.find({
      $or: [
        {
          phonenumber: { $regex: req.params.id },
        },
      ],
    });
    if (result) {
      resp.json(result);
    }
  } catch (error) {
    console.log(error.stack);
    return resp.json({ msg: "Internal Server Error" });
  }
};
export const SaveClient = async (req, resp) => {
  let homeSecuritySchema = new homeSecurity(req.body);
  let savedData = await homeSecuritySchema.save();
  console.log(savedData);
};
