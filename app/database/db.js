import mongoose from "mongoose"

export const MONGO_URL="mongodb+srv://Rni:Rni@cluster0.avoq4cu.mongodb.net/"
export const database=()=>{
    
    try {
        mongoose.connect(MONGO_URL,{
            dbName:'project1'
        })
        console.log("database connected successfully")
    } catch (error) {
        console.log("database not connected",error)
    }
}