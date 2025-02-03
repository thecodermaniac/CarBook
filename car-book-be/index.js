import express from "express";
import env from "dotenv";
// import torch from "torch";

// console.log("CUDA Available:", torch.cuda.is_available());
// console.log("Using GPU:", torch.cuda.get_device_name(0));

// IMPORT DB CONNECTION
import dbConnection from "./config/connection.js";
import carRoutes from "./routes/carRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import agentRoutes from "./routes/agentRoutes.js";

import cors from "cors";

const app = express();
env.config();

// parse urlencoded request body
app.use(express.urlencoded({ limit: "69mb" }));
app.use(express.urlencoded({ extended: true }));
// parse json request body
app.use(express.json());

// enable cors
app.use(cors());
app.options("*", cors());

// Mongodb connection
dbConnection();

//Routes Connection
// app.use('/',"Hi its worki")
app.use("/car", carRoutes);
app.use("/user", userRoutes);
app.use("/agent", agentRoutes);
app.use("/", (_req, res) => {
  res.send("Hi its working");
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
