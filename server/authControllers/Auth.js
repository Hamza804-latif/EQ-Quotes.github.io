import { AgentAuthModel } from "../database/models/auth.js";
import dotenv from "dotenv";
import jsonwebtoken from "jsonwebtoken";

dotenv.config();

export const AgentAuth = async (req, resp) => {
  let { username, password } = req.body;
  try {
    let agentLogin = await AgentAuthModel.findOne({ username, password });
    if (agentLogin) {
      jsonwebtoken.sign({ username }, process.env.secretKey, (err, token) => {
        if (err) {
          return resp.json({ msg: "something went wrong!" });
        }

        return resp.json({ status: 200, msg: "login Successfull", token });
      });
    } else {
      return resp.json({ status: 401, msg: "Invalid username or password" });
    }
  } catch (error) {
    console.log("Error in Agent login", error.stack);
    return resp.json({ status: 500, msg: "Internal Server Error" });
  }
};

export const SuperAgentAuth = () => {};
