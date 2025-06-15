import { hashPassword } from "../utils/hashPassword.js";
import { authDal } from "../dal/auth.dal.js";
import { userDal } from "../dal/user.dal.js";
import { createToken } from "../utils/token.js";



export const authService = {
    async register(user) {
        try {
            console.log("user password:", user.password);
            if (user.password.length < 6) {
                throw new Error('Password must be at least 6 characters long');
            }
            // Create user with hashed password
            const userData = {
                ...user,
                password: await hashPassword(user.password)
            };

            // Register the user using the data access layer (DAL)
            const response = await authDal.register(userData);

            // cast the response to a plain object and remove the password field
            const userWithoutPassword = response.toObject();
            delete userWithoutPassword.password;

            //Create a token for the user
            const token = await createToken({ id: userWithoutPassword._id }, { expiresIn: '1e' });

            return { success: true, message: 'User registered successfully', user: userWithoutPassword, token: token };
        } catch (error) {
            console.error('Error during registration:', error);
            throw error;

        }
    },

    async login(credentials) {
        try {
            // get user by email credentials.email

            // compare credentials.password with user.password

            // if successful, create a token and return success message

            return { success: true, message: 'User logged in successfully' };
        } catch (error) {
            console.error('Error during login:', error);
            throw error;

        }

    }
};