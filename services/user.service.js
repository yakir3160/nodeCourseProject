
import { userDal } from "../dal/user.dal.js";
import { dateTimeFormater_il } from "../utils/dateTimeFormater_il.js";
import { weatherService } from "./weather.service.js";



export const userServices = {
    getAllUsers: async () => {
        try {

            const USERS = await userDal.getAllUsers();
            // await userDal.updateUser("68429d90a299396e8a42f76b", { city: "haifa" });
          
            const formatedUsers = USERS.map(user => {
                user = user.toObject(); 
                user.createdAt = dateTimeFormater_il.formatDate(user.createdAt) + ' ' + dateTimeFormater_il.formatTime(user.createdAt);
                user.updatedAt = dateTimeFormater_il.formatDate(user.updatedAt) + ' ' + dateTimeFormater_il.formatTime(user.updatedAt);
                return user;
            })

            console.log(`users `, formatedUsers);
            return {
                message: "successes",
                users: formatedUsers
            }
        } catch (error) {
            throw error
        }
    },

    getUserById: async (id) => {
        try {
            console.log(`Fetching user with ID: ${id}`);


            const user = await userDal.getUserById(id);

            console.log(user);
            if (!user) {
                throw new Error('User Not found');
            }

            const userObject = user.toObject(); // Convert Mongoose document to plain object

            let weatherForUser = {}
            try {
                weatherForUser = await weatherService.getWeatherByCity('il', userObject.city);
            }
            catch (error) {
                console.error(`Error fetching weather for user with ID ${id}:`, error);
            }


            return {
                message: `Fetched user by id : ${id}`,
                user: {
                    ...userObject,
                    createdAt: dateTimeFormater_il.formatDate(user.createdAt) + ' ' + dateTimeFormater_il.formatTime(user.createdAt),
                    updatedAt: dateTimeFormater_il.formatDate(user.updatedAt) + ' ' + dateTimeFormater_il.formatTime(user.updatedAt),
                },
                temperature: weatherForUser?.weather?.temperature,
                description: weatherForUser?.weather?.description,
                fetchTime: dateTimeFormater_il.formatDate(new Date()) + ' ' + dateTimeFormater_il.formatTime(new Date()),
            };
        } catch (error) {
            throw error
        }
    }


}