import User from "../models/user.model.js";







export const authDal = {
    register: async (userData) => {
        try {
           const validatedUser = new User(userData);
           return await validatedUser.save();
        } catch (error) {
            console.error("Error during registration:", error);
            throw error;
        }
    }
   
}