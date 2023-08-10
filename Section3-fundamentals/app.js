// require()를 통하여 모듈 import 하기
const http = require('http');
const fs = require('fs');


const server = http.createServer((req, res)=>{
    //  서버에서 다루는 req 주요정보 3가지 (URL, method, headers)
    //  console.log(req.url, req.method, req.headers);
    //  서버 루프 프로세스 종료
    //  process.exit(); 

    const url = req.url;
    const method = req.method;
    //  url이 root일 때 만 HTML폼을 response한다.   
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST'){
        fs.writeFileSync('message.text', 'DUMMY');
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }


    //  첫번쨰 args인 Content-Type은 브라우저가 받아드리는 기본 헤더 형태이며, 
    //  두번째 args인 text/html은 첫번째 인자의 Contents-Type 해더에 대응하는 키값을 설정하는 것이다. 
    //  response시 html형태로 일련의 메타정보로 반환한다.
    res.setHeader('Content-Type', 'text/html');

    res.write('<html>');
    res.write('<head><title>First Page</title></head>');
    res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
    res.write('</html>');
    res.end();


});

server.listen(4000);

