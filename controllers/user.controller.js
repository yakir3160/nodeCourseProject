
import {userServices} from '../services/user.service.js'


export const getAllUsers =  async (req,res) => {
    try {
        const users = await userServices.getAllUsers();
        res.status(200).json(users);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

export const getUserById =  async (req,res) => {
    try {
        const id =  req.params.id;
        const user = await userServices.getUserById(id);
        if(!user)
            return res.status(404).json({message:'User not found'});
        res.status(200).json(user);
    }catch(error){
        res.status(500).json({message:error.message})
    }
}