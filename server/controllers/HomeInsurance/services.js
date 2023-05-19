import { homeInsurance } from "../../database/models/clients.js";

export const GetClients = async (req, resp) => {
  try {
    let data = await homeInsurance.find({}).lean();

    for (let i = 0; i < data.length; i++) {
      data[i] = { ...data[i], createdAt: data[i].createdAt.toLocaleString() };
    }

    resp.json(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const SearchClient = async (req, resp) => {
  try {
    let result = await homeInsurance.find({
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
  try {
    let homeSchema = new homeInsurance(req.body);
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
    let deletedData = await homeInsurance.findByIdAndDelete(req?.params?.id);
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
    let update = await homeInsurance.updateOne(
      { _id: req.params.id },
      { $set: req.body }
    );
    console.log(update);
    if (update?.modifiedCount > 0)
      return resp.json({ status: 200, msg: "Data is updated successfully!" });
    return resp.json({ status: 200, msg: "Data is already same" });
  } catch (error) {
    console.log(error.stack);
    return resp.json({ status: 500, msg: "Internal server error" });
  }
};
