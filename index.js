const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const app = express();
const userRoute =require("./routes/users");
const authRoute =require("./routes/auth");
const postRoute =require("./routes/posts");


dotenv.config();

mongoose.connect(process.env.MONGO_URL,(err) => {
    // console.log("connected to mongoDB");
    if(err) {
        console.log(err) }
    else {
       console.log("mongdb is connected")};
    
});

// Middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);


app.listen(3000, () => {
    console.log("sever start 3000");
})