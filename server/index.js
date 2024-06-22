import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';
import { authRouter } from "./routes/auth.js";
import { userProfileRouter } from "./routes/userProfile.js";

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
app.use('/', userProfileRouter)
app.use('/auth', authRouter);

// Handling Errors
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  res.status(err.statusCode).json({
    message: err.message,
  });
});



const port = 3000;

app.listen(port, () => console.log(`server is running at port:${port}`))

