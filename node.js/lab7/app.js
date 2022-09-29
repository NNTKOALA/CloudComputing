const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app.set("views", path.join(__dirname, 'views'))
app.set("view engine", "hbs")

//kết nối database
const mongoose = require('mongoose')
const url1 = "mongodb://localhost:27017/demo" 
const url2 = "mongodb+srv://nguyentrung:nntrung382k2@cluster.8b5c38m.mongodb.net/cloud"
mongoose.connect(url1, {useNewUrlParser: true}, err => {
    if(err) {
        console.log("DB connect error: " + err)
    }else{
        // console.log("DB connect successful")
        app.get("/", (req, res) => {
            GreenwichModel.find((err, data) => {
              if (err) {
                console.log(err);
              } else {
                console.log(data);
              }
            });
        });
    }
})

//chạy server
app.listen(port)