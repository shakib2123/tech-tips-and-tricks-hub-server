import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";

//Create the Express.js application
const app = express();

// Set up the middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "https://tech-tips-and-tricks-hub-server-omega.vercel.app",
      "http://localhost:3000",
    ],
    credentials: true,
  })
);
app.use(cookieParser());

//application routes
app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.json({
    message: "Welcome To Tech Tips & Tricks Hub API Service!",
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
