import express from "express";
import cors from "cors";
import { apiHelper } from "./chat.js";
import { config } from "dotenv";
import CustomEvent from "./customEvent.cjs";

config();
const app = express();
app.use(cors());

app.get("/getData", (req, res) => {
  const message = req.query.message;
  res.send(apiHelper(message));
  //   res.send(message);
});

app.listen(3001, () => console.log("server running"));
