import app from './app.js'
import {port} from './config/index.js'
import { connectToDb } from './config/db.js';

app.listen(port , async ()=> {
    try {
        await connectToDb();
        console.log(`Server running on http://localhost:${port}`);
    } catch (error) {
        console.error('Error starting the server:', error.message);
        process.exit(1);        
    }
});