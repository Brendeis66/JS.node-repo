# Node.js Basics

### 1. Node 서버 생성

- 1.1. createServer()에 들어갈 listner() 구현하기

    - a. 명시적인 Listner() 구현하기
    ```javascript
       // require()를 통하여 모듈 import 하기
        const http = require('http');

        function rqListner(req, res){

        }
        http.createServer(rqListner);

    ```
    - b. *비명시적 Listner() 구현하기*   
    ```javascript
       // require()를 통하여 모듈 import 하기
        const http = require('http');

        http.createServer(function rqListner(req, res){

        });
    ```
          
    - c. *비명시적 Listner() 구현하기*
    ```javascript
        // require()를 통하여 모듈 import 하기
        const http = require('http');

        http.createServer((req, res)=>{

        });
    ```  
- 1.2. 서버에서 다루는 req 주요 정보 
    - a, req.url, req.method, req.headers

- 1.3. 서버에서 다루는 res 주요 정보 
    - 

