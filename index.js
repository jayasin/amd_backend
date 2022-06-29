import express from "express";
import cors from "cors";
import weatherRouter from "./controllers/weather.controller.js"

const app = express();
const port = 3000;

app.use(cors())
app.use("/weather", weatherRouter);




app.listen(port, () => {
  console.log(`Weather API is up and running on port ${3000}`);
});
