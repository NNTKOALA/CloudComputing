//khai báo
const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000;  

//set thư mục chứa views(giao diện - frontend)
app.set("views",__dirname + '/views/hbs')
//set view engine (template engine)
app.set("view engine", "hbs")

//render ra trang home (index.hbs)
//get: get method
app.get("/", (req, res) => {
    let name = "Greenwich University";
    let address = "2 Pham Van Bach";
    let city = "Hanoi";
    res.render("index", { n: name, a: address, c: city });
});

app.get("/city", (req, res) => {
    let cities = ["Ha Noi", "HCM city", "Da Nang", "Can Tho"]
    let provides = ["FPT", "Viettel", "VNPT"]
    res.render("city", { country : "VietNam", cities: cities, provides: provides})
})

app.get("/login", (req, res) => {
    res.render("login");
  });
  
  app.get("/logout", (req, res) => {
    res.render("logout");
  });

//chạy web server
app.listen(port, () => {
    console.log("Server is running at: http://localhost:3000")
})