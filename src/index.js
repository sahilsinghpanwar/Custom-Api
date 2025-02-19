// require('dotenv').config({path: './env'});  ye dotenv hum esliye use krte h taki hum aager kisi bhi folder kai under koi bhi files ho toh vo easily excess ho jaye.
// or
import dotenv from "dotenv"

import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})



// connectDB import kr do or excute kr doh
connectDB()
// conncet hone kai baad server start kr do

.then(() => {
    
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error
    })
    
    app.listen(process.env.PORT || 8000, () => {
console.log(`Server is running at port ${process.env.PORT}`);

    })

}).catch((error) => {
    console.log("MONGODB connection FAILED!!! : ", error);
});





















//    way 1

/*
   
   import mongoose from "mongoose";
   import { DB_NAME } from "./constants";
   
import express from "express";
const app = express();
 
 
// use imidiatly execute function
(async () => {
   try {
                        //  database ka uri      database ka naam
      await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      app.on("error", (error) => {
       console.log("ERRR: ", error);
       throw error
      })
 
      app.listen(process.env.PORT, () => {
       console.log(`App is listening on port ${process.env.PORT}`)
      })
 
   } catch (error) {
       console.error("ERROR: ", error);
       throw err
   }
} )()
   */