import express from "express";
import cors from "cors";
import "dotenv/config";
import cookieParser from "cookie-parser";
import connectDb from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
const app = express();
const port = process.env.PORT || 4000;
connectDb();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // This ensures URL-encoded body parsing
app.use(cookieParser());
app.use(cors({ credentials: true }));

// API Endpoint
app.get("/", (req, res) => res.send("API Working"));
app.use("/api/auth", authRouter);
app.listen(port, () => console.log(`Server stated on Port:${port}`));
