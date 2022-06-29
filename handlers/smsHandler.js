import axios from "axios";
import { parseSmsAPIError } from "../common/constants.js";
import "dotenv/config";

/* To Initiate the SMS Request */
export const initateSMS = async (phoneNumber, message) => {
  try {
    const smsInfo = {
      body: message,
      to: phoneNumber,
      from: "amdTelecom",
    };

    const smsToken = await getToken();
    const headers = {
      authorization: `Bearer ${smsToken}`,
      "content-type": "application/json",
    };

    const { data } = await axios.post(
      "https://connect.routee.net/sms",
      smsInfo,
      { headers }
    );
    return data;
  } catch (error) {
    throw new Error(parseSmsAPIError(error).message);
  }
};

/* Access token generation functionlity for sms services */
const getToken = async () => {
  try {
    const headers = {
      authorization: process.env.smsAuthKey,
      "content-type": "application/x-www-form-urlencoded",
    };

    const { data } = await axios.post(
      "https://auth.routee.net/oauth/token",
      new URLSearchParams({ grant_type: "client_credentials" }),
      { headers }
    );
    return data.access_token;
  } catch (error) {
    throw Error("Unable to get SMS Token");
  }
};
