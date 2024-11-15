import mongoose from "mongoose";


export async function connect() {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`Connected to MongoDB `);
        
    } catch (e) {
        console.error(e);
        
    }
}