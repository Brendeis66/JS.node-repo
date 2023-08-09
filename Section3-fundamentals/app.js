// require()를 통하여 모듈 import 하기
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req);
    process.exit(); //  서버 루프 프로세스 종료

});

server.listen(4000);