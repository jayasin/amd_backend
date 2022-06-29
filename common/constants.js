export const STATUS_CODE = {
  BAD_REQUEST: 400,
  SUCCESS: 200,
};

/* for Parsing the weather API error */
export const parseWeatherError = (error) => {
  if (error.isAxiosError && error.response) {
    return { message: `city~~${error.response.data.message}` };
  }

  return { message: error.message };
};

/* for parsing the SMS API Errors */
export const parseSmsAPIError = (error) => {
    if (error.isAxiosError && error.response) {
      if(error.response.data.developerMessage !== "Insufficient Balance") {
        return { message: `phone~~Please add a valid mobile number`};
      } else {
        return { message: `phone~~Insufficient Balance to send SMS`};
      }
      
    }
  
    return { message: error.message };
  };
