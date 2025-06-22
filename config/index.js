import 'dotenv/config.js'


export const port = process.env.PORT
export const weatherApiKey =  process.env.WEATHER_API_KEY
export const mongoDbUri = process.env.MONGODB_URI;
export const jwtSecret = process.env.JWT_SECRET;
export const appMode = process.env.MODE

