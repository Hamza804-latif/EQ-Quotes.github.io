import mongoose from "mongoose";

const AgentLoginSchema = new mongoose.Schema({
  username: String,
  password: String,
});

export const AgentAuthModel = mongoose.model("AgentLogin", AgentLoginSchema);
export const AdminAuthModel = mongoose.model("AdminLogin", AgentLoginSchema);
