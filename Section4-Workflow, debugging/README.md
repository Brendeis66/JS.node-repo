# Node.js 개선된 개발 워크플로우 및 디버깅

- 1.1. script를 이용한 배포하는 법 (workflow)
   ```markdown
      터미널에서 'npm init' 실행
      해당항목에 기입하면, package.json파일이 생성된다.

      다시 터미널에서 해당 스크립트를 실행하려면 'npm start' 를 입력한다.
      package.json파일에 "start-server": "node app.js" 를 입력하고, 

      alias로 실행한다면 터미널에 'npm run start-server' 라고 입력을 해야한다.
      alias로 사용시 run이 붙어야 함을 인지하여야 한다. 

   ```
- 1.2. 3rd party package 추가하기 
   ```markdown 
      
      터미널에서 npm install 패키지명 

      ###### 제품 배포에 필요한 dependency 일 사용 (이 프로젝트에서만 사용 가능하다.)
      npm install 패키지명 --save 

      ###### 개발용에서만 필요한 dependency 일 경우 (이 프로젝트에서만 사용 가능하다.)
      npm install 패키지명 --save-dev 

      ###### 이 프로젝트에는 설치하지 않지만 머신(OS env) 전체에 설치

   ```

- 1.3. 전역 기능 vs 코어 모듈 vs 제3자 모듈
   ```markdown 
      지난 강의에서 Node.js에서 사용 가능한 기능들의 중요한 개념과 사용법을 알려드렸습니다.

      기본적으로 다음과 같이 구분할 수 있습니다.

      전역 기능: const나 function 같은 키워드 및 process 등의 전역 객체

      코어 Node.js 모듈: 파일 시스템 모듈 ("fs"), 경로 모듈 ("path"), Http 모듈 ("http") 등

      제3자 모듈: npm install을 통해 어떤 종류의 기능도 설치 가능

      전역 기능은 항상 사용 가능하며, 사용하기 위해 파일에 임포트 할 필요가 없습니다.

      코어 Node.js 모듈은 설치하지 않아도 되기 때문에 npm install이 필요하지 않지만, 관련된 기능을 사용하려면 임포트 해야 됩니다.

      예시를 보여드리면

      const fs = require('fs');

      “fs” 모듈에서 내보낸 fs객체를 사용할 수 있게 됩니다.

      프로젝트 폴더에npm instal을 실행해 제3자 모듈을 설치하고 임포트 합니다.

      추후 강의에서 다룰 예정이라 지금 당장 이해하실 필요는 없지만, 그 예로

      // Terminal 또는 명령 프롬프트에서는
      
      npm install --save express-session
      // app.js 같은 코드 파일에서는
      
      const sessions = require('express-session');
            
   ```   