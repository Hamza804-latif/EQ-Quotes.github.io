import mongoose from "mongoose";
import { homeWarranty } from "../../database/models/clients.js";

export const GetClients = async (req, resp) => {
  let data = await homeWarranty.find({}).lean();
  for (let i = 0; i < data.length; i++) {
    data[i] = {
      ...data[i],
      createdAt: data[i].createdAt.toLocaleString("en-US", {
        timeZone: "America/New_York",
      }),
    };
  }
  resp.json(data);
};

export const SearchClient = async (req, resp) => {
  try {
    let result = await homeWarranty
      .find({
        $or: [
          {
            phonenumber: { $regex: req.params.id },
          },
        ],
      })
      .lean();
    if (result) {
      for (let i = 0; i < result.length; i++) {
        result[i] = {
          ...result[i],
          createdAt: result[i].createdAt.toLocaleString("en-US", {
            timeZone: "America/New_York",
          }),
        };
      }
      resp.json(result);
    }
  } catch (error) {
    console.log(error.stack);
    return resp.json({ msg: "Internal Server Error" });
  }
};
export const SaveClient = async (req, resp) => {
  try {
    let homeSchema = new homeWarranty(req.body);
    let savedData = await homeSchema.save();
    if (savedData)
      return resp.json({ status: 200, msg: "Data saved Successfully" });
    return resp.json({ status: 500, msg: "Something went wrong" });
  } catch (error) {
    console.log(error.stack);
    return resp.json({ status: 500, msg: "Internal Server Error" });
  }
};
export const DeleteClient = async (req, resp) => {
  try {
    let deletedData = await homeWarranty.findByIdAndDelete(req?.params?.id);
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
export const UpdateData = async (req, resp) => {
  try {
    let update = await homeWarranty.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    if (update?.modifiedCount > 0)
      return resp.json({ status: 200, msg: "Data is updated successfully!" });
    return resp.json({ status: 200, msg: "Data is already same" });
  } catch (error) {
    console.log(error.stack);
    return resp.json({ status: 500, msg: "Internal server error" });
  }
};
