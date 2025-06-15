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
    getUserByEmail: async (email,isFromLogin = false) =>{
        try {
            if(isFromLogin)
                return await User.findOne({email:email}).select('+password')
            
            return await User.findOne({email:email})
        } catch (error) {
            throw error
        }
    },
    updateUser: async (id, dataToUpdate) => {

        try {
            return await User.findByIdAndUpdate(id, dataToUpdate, { new: true });
        } catch (error) {
            throw error
        }

    },
    deleteUser:  async (id) => {
        try {
            return await User.findByIdAndDelete(id)
        } catch (error) {
            throw error
        }
    }
}