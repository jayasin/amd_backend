import Joi from "joi";

export const getWeatherValidation = Joi.object({
city: Joi.string().required(),
phoneNumber: Joi.string().required()
});



