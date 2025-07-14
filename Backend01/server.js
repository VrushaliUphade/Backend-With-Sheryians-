const http = require('http');
const sever = http.createServer((req, res)=>{
    res.end('Hello world from the server')
})   // create server

sever.listen(3000, ()=>{
    console.log('sever is running on port 3000');
    
})

