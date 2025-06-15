import { weatherService } from "../services/weather.service.js";





export const  getWeatherByCity =  async (req,res)=>{

      try {
        const country = req.params.country;
        const city = req.params.city; 
      
        const response =  await weatherService.getWeatherByCity(country, city);
        res.status(200).json(response)
      } catch (error) {
        console.error('Error fetching weather data:', error);
        return res.status(500).json({error :error.message });
        
      }
    }