import { homeInsurance } from "../../database/models/clients.js";

export const GetClients = (req, resp) => {
  console.log(req.body);
  resp.send("inside get");
};

export const SearchClient = (req, resp) => {
  resp.send("inside post");
};
export const SaveClient = async (req, resp) => {
  let homeInsuranceSchema = new homeInsurance(req.body);
  let savedData = await homeInsuranceSchema.save();
  console.log(savedData);
};
