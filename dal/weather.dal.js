import { weatherApiKey } from '../config/index.js';



export const weatherDal = {
    getWeatherByCity: async (country, city) => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherApiKey}&units=metric`);
            if (!response.ok) {
                throw new Error(`Error fetching weather data: ${response.statusText}`);
            }   
            return await response.json();
        } catch (error) {
            console.error('Error in weatherDal.getWeatherByCity:', error);
            throw error;
        }
    }
};