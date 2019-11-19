const app = require("express")()
const bodyParser = require('body-parser');
// เป็นรูปแบบของการเขียน souceform
// const express = require("express");
// const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// link ไฟล์
app.use("/api/v2/authen/", require("./api_authen"))
app.use("/api/v2/stock/", require("./api_stock"))

app.listen(8085, ()=>{
        console.log("Backend is running..")
})