// require()를 통하여 모듈 import 하기
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    //  서버에서 다루는 주요정보 3가지 (URL, method, headers)
    // process.exit(); //  서버 루프 프로세스 종료

});

server.listen(4000);