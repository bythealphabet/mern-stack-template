import express from "express";
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

app.get("/", (req, res) => res.status(200).send("Hello World"));

export default app;
