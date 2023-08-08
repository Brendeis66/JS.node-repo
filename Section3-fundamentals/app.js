// require()를 통하여 모듈 import 하기
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
});

server.listen(4000);