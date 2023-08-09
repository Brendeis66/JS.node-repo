// require()를 통하여 모듈 import 하기
const http = require('http');

const server = http.createServer((req, res)=>{
    //  서버에서 다루는 req 주요정보 3가지 (URL, method, headers)
    console.log(req.url, req.method, req.headers);
    //  서버 루프 프로세스 종료
    //  process.exit(); 

    //  첫번쨰 args인 Content-Type은 브라우저가 받아드리는 기본 헤더 형태이며, 
    //  두번째 args인 text/html은 첫번째 인자의 Contents-Type 해더에 대응하는 키값을 설정하는 것이다. 
    //  response시 html형태로 일련의 메타정보로 반환한다.
    res.setHeader('Content-Type', 'text/html')
});

server.listen(4000);

