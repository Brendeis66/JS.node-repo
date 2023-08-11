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
    //  message로 redirect히며 POST 이어야 한다. 
    if(url === '/message' && method === 'POST'){
        //  request event listener 등록 
        //  특정 이벤트를 정의하여 listening 할 수 있다. 
        const body = [];

        //  이벤트 핸들러에 등록 (이벤트 큐에서 완료가 되면 ()=>{} 'Arrow'()를 진행한다.)  
        req.on('data'/* stream data chunk 또는 버퍼*/, (chunk) => {
            body.push(chunk);
            console.log(chunk);
        });
        //  이벤트 핸들러에 등록
        req.on('end', ()=> {
            const parseBody = Buffer.concat(body).toString();
            //  split separator를 기준점으로 왼쪽 [0], 오른쪽 [1]로 구분
            const message = parseBody.split('=')[1];

            console.log(parseBody);
            
            //  fs.writeFileSync() 사용시 동기적 파일 시스템 저장(블로킹 발생) 
            //  따라서 비동기적인 파일 쓰기()인 writeFile()를 쓴다.
            //  3번째 인자인 callback()로 결과를 삽입한다.(보통은 에러처리를 한다.)
            fs.writeFile('message.text', message, err=>{
            
            // 리스폰스 관련 코드 및 헤더 관련 저장 위치 지정  
            res.statusCode = 302;
            res.setHeader('Location', '/');
            // 한번 response.end()가 호출되어지면 더이상 response에 대해 처리하지 않는다!
            return res.end();
            });           
        });
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

