const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

// const dotenv = require('dotenv');
require('dotenv').config()

app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json())


const userRouter = require("./routes/user.router");
app.use("/api/users", userRouter);

const adminRouter  = require("./routes/admin.router")
app.use("/api/admin", adminRouter)

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`Server Started on Port : ${PORT}`);
})