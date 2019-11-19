// const app = require("express")()
const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');



// เป็นรูปแบบของการเขียน souceform
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//กำหนดให้ user เข้าใช้งานในไฟล์ได้ (กำหนดสิทธิ์เข้าในหลังบ้าน))
app.use(express.static(__dirname + "/uploaded"));

app.use(cors());

// link ไฟล์
app.use("/api/v2/authen/", require("./api_authen"))
app.use("/api/v2/stock/", require("./api_stock"))

app.listen(8085, ()=>{
        console.log("Backend is running..")
})