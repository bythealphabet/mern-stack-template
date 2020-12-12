import path from "path";
import express from "express";
import render from "./helpers/renderer";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import devBundle from "../build-utils/devBundlel";

const app = express();

const development = process.env.NODE_ENV === "development";

if (development) {
  devBundle.compile(app);
}

app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

const CURRENT_WORKING_DIR = process.cwd();
app.use("/dist", express.static(path.join(CURRENT_WORKING_DIR, "dist")));

app.get("/", render);

export default app;
