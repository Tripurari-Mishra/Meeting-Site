import express from "express";
import { createServer } from "node:http";



import mongoose from "mongoose";
import { connectToSocket } from "./controllers/socketManager.js";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import userRoutes from "./routes/users.routes.js";


const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT || 8000);
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

app.use("/api/v1/users", userRoutes);


const start = async () => {
  try {
    // Ye check karega ki URL mil raha hai ya nahi
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not defined in .env file");
    }

    const connectionDb = await mongoose.connect(process.env.DATABASE_URL);
    console.log(`MONGO Connected DB Host: ${connectionDb.connection.host}`);

    const currentPort = app.get("port");
    server.listen(currentPort, () => {
      console.log(`LISTENIN ON PORT ${currentPort}`);
    });
  } catch (error) {
    console.error("COULD NOT CONNECT TO DATABASE:", error.message);
    process.exit(1); // Error aane par process band kar dega
  }
};

start();
