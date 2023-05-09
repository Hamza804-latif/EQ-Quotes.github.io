import mongoose from "mongoose";
import { homeWarranty } from "../../database/models/clients.js";

export const GetClients = async (req, resp) => {
  let data = await homeWarranty.find({});
  resp.json(data);
};

export const SearchClient = async (req, resp) => {
  try {
    let result = await homeWarranty.find({
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
  let homeWarrantySchema = new homeWarranty(req.body);
  let savedData = await homeWarrantySchema.save();
  console.log(savedData);
};
