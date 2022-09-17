// khai bao module http de tao web server
const http = require('http')
// khai bao local server
const host = 'localhost' // 127.0.0.1
// khai bao ser port
const port = 3000
// tao web server 
const server = http.createServer((req, res) => {
    res.end('Hello World. This is my website')
})
// chay server
server.listen(3000, () =>{
    console.log('Server is running at http:' + host + ':' + port)
})