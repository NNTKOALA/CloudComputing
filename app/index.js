const http = require('http')
const port = process.env.PORT || 3000

const app = http.createServer((req, res) => {
    res.write("<h1>Hello</h1>")
    res.write("<h3>NodeJS web page has been deployed to Heroku successfully</h3>")
    res.end()
})
app.listen(port)