const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParse = require('body-parser');
const studentroutes = require('./routes/employe-routes');
const myDB = require('./config/db');
dotenv.config();

app = express()

app.use(bodyParse.json());
app.use(cors());
myDB();
app.use("/", studentroutes);
app.listen(process.env.PORT, () => {
    console.log("Server Is working on web", process.env.PORT);
})