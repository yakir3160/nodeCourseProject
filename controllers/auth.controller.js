
import { authService } from '../services/auth.service.js';



export const register = async (req, res) => {
    try {
        const user = req.body;
        const response = await authService.register(user);
        res.status(201).json(response);
    } catch (error) {
        console.error('Error during registration:', error);
        res.status(500).json({ message: 'Registration failed', error: error.message });
    }

}



export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).send('Username and password are required');
        }
        const response = await authService.login(username, password);
        res.status(200).json(response);
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Login failed', error: error.message });

    }
}
