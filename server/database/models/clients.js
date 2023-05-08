import mongoose from "mongoose";

const clientsSchema = mongoose.Schema(
  {
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    phonenumber: { type: String },
    state: { type: String },
    earn: { type: String },
    creditscore: { type: String },
    zipcode: { type: String },
  },
  { timestamps: true }
);

export const homeWarranty = mongoose.model("homeWarranty", clientsSchema);
export const homeSecurity = mongoose.model("homeSecurity", clientsSchema);
export const homeInsurance = mongoose.model("homeInsurance", clientsSchema);
export const Solar = mongoose.model("Solar", clientsSchema);
