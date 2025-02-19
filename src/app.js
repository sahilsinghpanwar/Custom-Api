// this is work of video 8

import express from 'express';

import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


// for more learning go to website npm cors
app.use(cors({

    origin: process.env.CORS_ORIGIN,
    credentials: true,

}))

// json ke form mai  data lane ka tarika

app.use(express.json({limit: "20kb"}))

// url ko encode kr deta h or we use extended means object kai under object hoga toh (ye data ko decode kr deta h)

app.use(express.urlencoded({extended: true, limit: "20kb"}))

// esmai saare assects hogne means images, pdf favicon  in public folder
app.use(express.static("public"));


// cookieParser hum security reason sai use krte h jo secure rhta h or use bs user or server kai beech mai he data rhta h or usko server kai beech mai he data rhta h.
app.use(cookieParser())

export{ app };