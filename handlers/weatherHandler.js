import axios from "axios";
import { parseWeatherError } from "../common/constants.js";
import 'dotenv/config'

/* Fetching the results from openweathermap APIs */
export const getWeatherStats = async (city) => {
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.openweatherAppid}`
    );

    return data;
  } catch (error) {
    throw new Error(parseWeatherError(error).message);
  }
};
