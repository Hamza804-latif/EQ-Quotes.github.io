import mongoose from "mongoose";

export const GetClients = (req, resp) => {
  resp.send("inside get");
};

export const SearchClient = (req, resp) => {
  resp.send("inside post");
};
export const SaveClient = (req, resp) => {
  resp.send("inside search");
};
