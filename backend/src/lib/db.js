import mongose from "mongose"

import {ENV} from "./env.js"

export const connectDB = async() => {
    try {
        const  conn = await mongose.connect(ENV.DB_URL);
        console.log("Connected to mongoDB :" , conn.connection.host);

    } catch (error){
        console.error("Error connecting to MongoDB",error);
        process.exit(1);
    }
};