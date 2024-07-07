import mongoose from "mongoose";

let isConnected = false; 

export const connectionToDB = async () => {
    mongoose.set('strictQuery', true)
}