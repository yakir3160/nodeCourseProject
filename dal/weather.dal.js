import { weatherApiKey } from '../config/index.js';



export const weatherDal = {
    getWeatherByCity: async (country, city) => {
        try {
            if (!country) {
                return (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric`)).json();
            }

            const response = (await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${weatherApiKey}&units=metric`)).json();
    
            
        } catch (error) {
            console.error('Error in weatherDal.getWeatherByCity:', error);
            throw error;
        }
    }
};