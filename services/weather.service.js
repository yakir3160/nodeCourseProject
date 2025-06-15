import { weatherDal } from "../dal/weather.dal.js";






export const weatherService = {
    getWeatherByCity: async (city,country) => {
        try {
            console.log(`Fetching weather data for ${city}, ${country}`);
            const data = await weatherDal.getWeatherByCity(country, city);
            console.log(data);
            return {
                message: `Weather data for ${city}, ${country}`,
                weather: {
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                },
                fetchTime: new Date().toISOString(),
            };
        } catch (error) {
            throw error;
        }
    }
    
}