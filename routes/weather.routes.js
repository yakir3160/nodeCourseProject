
import {Router} from "express"
import { getWeatherByCity } from "../controllers/weather.controller.js";

const router = Router();


router.get('/:country/:city',getWeatherByCity);



export default router