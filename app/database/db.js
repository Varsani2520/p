import mongoose from "mongoose"

export const database=()=>{
    
    try {
        mongoose.connect(process.env.MONGODB_URI,{
            dbName:'project1'
        })
        console.log("database connected successfully")
    } catch (error) {
        console.log("database not connected",error)
    }
}