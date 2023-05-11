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

export const DeleteClient = async (req, resp) => {
  console.log("in");
  try {
    let deletedData = await Solar.findByIdAndDelete(req?.params?.id);
    if (deletedData) {
      return resp.json({ status: 200, msg: "Data Deleted Successfully" });
    } else {
      return resp.json({ status: 200, msg: "Data not found" });
    }
  } catch (error) {
    console.log(error.stack);
    return resp.json({ status: 500, msg: "Internal Server Error" });
  }
};
