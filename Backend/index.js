import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
import config from "./config.js";
import LoginRoute from "./Routes/LoginRoute.js"
import CaseRoute from "./Routes/CaseRoute.js"

app.use(cors());
app.use(express.json());
app.use('/user', LoginRoute);
app.use('/case', CaseRoute);


const mongoURI = config.mongoURI;

//done my setup to connect my mongo cloud to my nodejs/expressjs

mongoose
  .connect(mongoURI)
  .then(() => app.listen(5500))
  .then(() => console.log("connected to db at port 5500 :)"))
  .catch((err) => console.log(`${err} is error`));