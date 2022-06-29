import express from "express";
import { STATUS_CODE } from "../common/constants.js";
import {getWeatherValidation} from "../common/validator.js";
import { getWeatherStats } from "../handlers/weatherHandler.js";
import { initateSMS } from "../handlers/smsHandler.js";
const router = express.Router();


router.get("/", async (req, res) => {
    try {
      await getWeatherValidation.validateAsync(req.query);
  
      const weatherdata = await getWeatherStats(req.query.city);
      const smsData = await initateSMS(req.query.phoneNumber, `Weather Report - City: ${weatherdata.name}, temprature: ${weatherdata.main.temp} F`);
  
      res.status(STATUS_CODE.SUCCESS).send({status: "success", message: "Weather Data fetched successfully", data: {smsData, weatherdata} });
  
    } catch (error) {
  
      res.status(STATUS_CODE.BAD_REQUEST).send({status: "failure", message: error.message, data: {}, error: error});
    }
  });

  export default router;
  
  