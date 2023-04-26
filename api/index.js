const express = require("express");
const app = express();
const mongoose = require("mongoose")

const dotenv= require("dotenv")

dotenv.config();

mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(console.log("Connected to Url")).catch((err)=> console.log(err));

app.listen("5002", () => {
    console.log("Backend is running...")
})