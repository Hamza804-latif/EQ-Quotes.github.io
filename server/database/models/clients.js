import mongoose from "mongoose";

const clientsSchema = mongoose.Schema({
  firstname: { type: String },
  lastname: { type: String },
  email: { type: String },
  phonenumber: { type: String },
  state: { type: String },
  earn: { type: String },
  creditscore: { type: String },
});

export default mongoose.model("clients", clientsSchema);
