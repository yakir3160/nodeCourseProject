import mongoose from "mongoose";
import { mongoDbUri } from "./index.js";

export const connectToDb = async () =>{
    try {
        const con = await mongoose.connect(mongoDbUri);
        console.log('MongoDB connected:', con.connection.host, con.connection.name);
    } catch (error) {
        console.log('Error connecting to db',error.message);
        process.exit(1)
    }
}