import { homeInsurance } from "../../database/models/clients.js";

export const GetClients = async (req, resp) => {
  let data = await homeInsurance.find({});
  resp.json(data);
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
  let homeInsuranceSchema = new homeInsurance(req.body);
  let savedData = await homeInsuranceSchema.save();
  console.log(savedData);
};
