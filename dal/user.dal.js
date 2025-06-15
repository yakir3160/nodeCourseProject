import User from '../models/user.model.js';

export const userDal = {
    getAllUsers: async () => {
        try {
            return await User.find();
        } catch (error) {
            throw error
        }
    },

    getUserById: async (id) => {
        try {
            return await User.findById(id);
        } catch (error) {
            throw error
        }
    },
    updateUser: async (id, userData) => {

        try {
            return await User.findByIdAndUpdate(id, userData, { new: true });
        } catch (error) {
            throw error
        }

    }
}