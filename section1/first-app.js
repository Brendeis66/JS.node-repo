//console.log('Hello from Node.js');
/*
    nodejs 에서 독립적인 파일시스템 File System 사용예시
*/

const fs = require('fs'); // 노드중에 코어 모듈인 fs사용.
fs.writeFileSync('hello.txt'/**args1: 파일이름 */, 'Hello from Node.js'/**args2: 파일에 들어갈 내용 */);

const error = () =>{
    
}