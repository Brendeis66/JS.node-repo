// require()를 통하여 모듈 import 하기
const http = require('http');
const routes = require('./routes.js');

const server = http.createServer(routes);

// const server = http.createServer((req, res)=>{
//     //  서버에서 다루는 req 주요정보 3가지 (URL, method, headers)
//     //  console.log(req.url, req.method, req.headers);
//     //  서버 루프 프로세스 종료
//     //  process.exit();
// });

server.listen(4000);
