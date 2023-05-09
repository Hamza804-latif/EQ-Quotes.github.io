import mongoose from "mongoose";
import { Solar } from "../../database/models/clients.js";

export const GetClients = async (req, resp) => {
  let data = await Solar.find({});
  resp.json(data);
};

export const SearchClient = async (req, resp) => {
  try {
    let result = await Solar.find({
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
  let SolarSchema = new Solar(req.body);
  let savedData = await SolarSchema.save();
  console.log(savedData);
};
