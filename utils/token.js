import  jwt from 'jsonwebtoken';
import {jwtSecret} from '../config/index.js';

export const createToken = async (payload, options) => {
    console.log(`Creating token with payload:`, payload);
    if (!jwtSecret) {
        throw new Error('JWT Secret is not defined');
    }
    return await jwt.sign(payload, jwtSecret, options);
};

export const verifyToken = async (token) => {
    try {
        return await jwt.verify(token, jwtSecret);
    } catch (error) {
        throw error;
    }
};
