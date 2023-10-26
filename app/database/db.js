import mongoose from "mongoose"

export const database=()=>{
    
    try {
        mongoose.connect(process.env.MONGO,{
            dbName:'project1'
        })
        console.log("database connected successfully")
    } catch (error) {
        console.log("database not connected",error)
    }
}