import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const VerifyToken = (req, resp) => {
  let token = req?.body?.token;
  if (token) {
    jwt.verify(token, process.env.secretKey, (err, valid) => {
      if (err) {
        return resp.send({ message: "Session expired login again" });
      } else {
        resp.json({ status: 200, msg: "ok" });
      }
    });
  } else {
    resp.status(403).send({ message: "please provide token" });
  }
};
export default VerifyToken;
