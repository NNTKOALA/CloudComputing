const http = require('http')
//Note: muốn deploy lên hosting (heroku)
//thì cần phải set port với process.env.PORT
const port = process.env.PORT || 3000

const app = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.end("Hello World. I had deployed NodeJS to Heroku successfully")
})
app.listen(port)