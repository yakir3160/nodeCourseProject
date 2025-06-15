// imports
import express from "express";
import cors from "cors"
import routes from './routes/index.js'


//setup
const app = express();


//middlwear
app.use(cors());
app.use(express.json())


//main Route
app.use('/',routes)


export default app