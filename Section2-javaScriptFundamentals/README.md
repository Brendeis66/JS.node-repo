# javaScript 기본

### 1. functions 

- 1.1. *종류*

    - a. *명시적 함수*
    ```javascript
        function function_name(args1, args2)=>{ 
        }

        function sum(a, b){
            return a + b;
        }

        function isPositive(number){
            return number >= 0;
        }

        function randomNumber(){
            return Math.random;
        }

        document.addEventListener('click', function(){
            console.log('click');
        });
    ```  

    - b. *비명시적 함수 (ES6)*   
    ```javascript
        ()=>{}
        // => 이후로 바로 리턴 하기 때문에 return 이 필요없다
        let sum = (a, b) => a + b;

        let isPositive = number => number >= 0;
        
        let randomNumber = () => Math.random;

        document.addEventListener('click', () => console.log('Click'));
    ```
    - c. *scope에서의 비명시적 함수와 명시적 함수의 차이점*
    
    ```javascript
        class Person{
            constructor(name){
                this.name = name;
            }

            printNameArrow(){
                setTimeout(()=>{
                    console.log(`Arrow: ${this.name}`);
                }, 100);
            }

            printNameFunction(){
                setTimeout(()=>{
                    console.log(`Function: ${this.name}`); 
                }, 100);
            }
        }
        let person  = new Person('Bob');
        person.printNameArrow(); // Bob을 재대로 출력

        //  Bob을 출력하지 못함 global scope this를 사용하기 때문이다.
        person.printNameFunction(); //  결과 '';  
        console.name(this.name);    //  결과 '';
        //  무슨말인가 하면, 여기서 위 this.name을 출력해보자 마찬가지로 빈 문자열이 나온다. 

    
    ```

    - d. *비명시적 함수*
    ```javascript
        function(){} 
    ```      

### 2. Object
- code
    ```javascript
            const object = {
                name: '',
                age: 29
                function: () {
                    //  this를 사용하기 위해서는 (){}, 또는 function()를 사용한다. 
                    this.name + 'asd';  
                    
                }
            };
            object.function();
    ```    
### 3. Array
- code
    ```javascript
        const elementsOfArrays = ['A', 'B', 'C'];
        for (let elements of elementsOfArrays){}
    ```
    
- code : *map을 이용한 함수(필수적)*
    ```javascript
        //  새로운 배열을 생성하여, 각 원소마다 'S'를 추가하여 삽입한다.
        elementsOfArrays.map(args => 'S' + elementsOfArrays)
         
    
    ```
- c. *배열과 객체는 레퍼런스 타입이다.* 
    ```javascript
        //  const elementsOfArray 변수는 배열의 초기 주소가 저장되고 해당 주소에 가르키는 데이타가 저장이 된다. 
        //  따라서 push나 pop의 경우 배열의 값을 변경하는것이 아닌 참조된 주소에 데이타가 추가 되는 것이다. 
    ```
    


- d. *Spread, Rest연산자에 관하여*
    ```javascript
        /////////////////////////////////////////////////////////////////////////////////
        //    원 데이타에 대한 참조 추가를 하지 않고 
        //    새로운 배열(사본)에 복사하여 데이타를 조작하는게 현재 추세이다. 이것을 immutablity라고 한다. 
        //    이렇게 하여 오류를 피할 수 있으며, 원 코드를 읽어올 수 없는 문제를 방지 할 수 있다.         
        ////////////////////////////////////////////////////////////////////////////////

            ////////////////////////////////////////////////////////////////////////////
            //  slice(): 단순히 배열을 복사한다.
            ////////////////////////////////////////////////////////////////////////////
            const newArray = elementsOfArrays.slice(); 

            ////////////////////////////////////////////////////////////////////////////
            //  [spread 연산자] -- 용도(객체나 배열에 사용)
            ////////////////////////////////////////////////////////////////////////////
            //  spread ...주위의 데이타를 복사(기존 배열에서 모든 원소를 끄집어내어 새로운 배열에 추가해준다.)
            //      (1) ...의 원소를 하나하나씩 끄집어내어
            //      (2) [] 안에 넣어준다.
            const newArray = [...elementsOfArrays];  
            //
            //  객체도 마찬가지로......이런식으로 객체 사본으로 복사 할 수 있다. 
            const newObject = {...Object};    

            ////////////////////////////////////////////////////////////////////////////
            //  [rest 연산자 ] -- 용도(인자에 쓰일때 사용)           
            ////////////////////////////////////////////////////////////////////////////
            //   ...args는 인자들을 조합하여, arg에 하나의 배열로 만든다. 
            const toArray = (...args) => {
                        return args
            };
            // output : [1,2,3,4,5,6,7] 
            console.log(toArray(1,2,3,4,5,6,7));
            

    ``` 
            
- e. *object destructuring, array destructuring*
    ```javascript
        // 필요한 부분만 객체를 분해하여 추출 { element }
        const printName = ({ name }) => {
            console.log(name);

        }
        printName(person);
        // 객체의 필요한 요소만 추출 하여 복사
        const { name, age } = person;
        console.log(name, age);

        const hobbies = ['A', 'B', 'C', 'D', 'E'];
        // 기존 배열을 새로운 배열에 복사(추출)
        const [hobby1, hobby2] = hobbies;
    ```
### Async code, Promise

- a. Asyncronous function(callback, promise) 정의 
    
    ```javascript

        // setTimeout() 2초 경과 후 callback 내부 함수인 '()=>{}'를 호출 하고 
        // 내부 콜백 작업이 완료되면 setTimer() 도 작업이 완료 된다. 
        // 비동기적 코드(동기적 코드에 영향(non blocking)을 주지 않고) 수행된다.

        ////////////////////////////////////////
        // Callback 
        const fetchData = callback => {
            setTimeout(()=>{
                callback('Done.');
            }, 1500);
        };

        setTimeout(()=>{
            console.log('Timer is done!');
            fetchData( text=>{
                console.log(text);
            })
        }, 2000);

        console.log('Hello!');  //동기적 코드
        console.log('Hi!');     //동기적 코드

        ///////////////////////////////////////
        // Promise
         const fetchData = () => {

            // promise에는 resolve()와 reject()가 callback 함수로 존재한다.
            const promise = new Promise((resolve, reject)=>{
                setTimeout(() => {
                resolve('Done.');
            }, 1500);
            });
            // promise 인스턴스가 리턴시에 resolve, reject 여부에 따라 .then, .catch인지 여부가 결정된다. 
            return promise; 
        };

        setTimeout(() => {
            console.log('Timer is done!');
            fetchData()
            .then(text => {
                console.log(text);
                return fetchData(); //다음 .then의 참조용을 위해 다시 호출
            })
            .then(text2 => {
                console.log(text2);
            });

        }, 2000);

        console.log('Hello!');  //동기적 코드
        console.log('Hi!');     //동기적 코드
     
    
    
    ```
### Promise 추가 코드 설명, callback의 문제점 그리고 Promise로 전환하게 된 이유 설명
- a. Promise에 대한 이해를 위한 기본 코드  
    ```javascript    

        //  Promise에 대한 기본 정의 
        //  '약속' 과 같이 어떤 조건이 달성되면 이렇게 해줄게 라고 선언을 미리 해두고
        const p = new Promise((resolve, reject) => {
            let a = 1 + 1;
            if(a==2){
                resolve('Success');
            }else{
                reject('Failed');
            }
        })
        //  조건이 성사 되면 조건에 따라 Promise 인스턴스.then() 또는 .catch()로 실행된다.  
        p.then((message) => {
            console.log(`This is in the then ` +message);
        }).catch((message) => ) {
            console.log(`This is in the catch ` +message);
        }


    ```
- b. callback의 예시 
    ```javascript 

        //  TODO: 1. callback function
        //  TODO: 2. promise function 

        //  conditions
        const conditionOne = false;
        const conditionTwo = false;

        //  callback() 정의
        function mainCallback(callback, errorCallback){
            if(conditionOne){
                errorCallback({
                    name: 'error 1',
                    message: ':('
                });
            }else if(conditionTwo){
                errorCallback({
                    name: 'error 2',
                    message: 'WTF'
                });
            }else{
                callback('^^');
            }
        }
        //  promise() 정의
        function mainPromise(){
            return new Promise((resolve, reject) => {
                if(conditionOne){
                    reject({
                        name: 'error 1',
                        message: ':('
                    });
                }else if(conditionTwo){
                    reject({
                        name: 'error 2',
                        message: 'WTF'
                    });
                }else{
                    resolve('^^');
                }
            }) 
        }

        mainCallback((message) => {
            console.log('Success: ' +message);
        }, (error)=>{
            console.log(error.name+ ' ' +error.message);
        });
        
        mainPromise().then((message) => {
           console.log('Success: ' +message);
        }).catch((error) => {
           console.log(error.name+ ' ' +error.message); 
        });
    ```
- c. 다중 Promise 예시 
    ```javascript 

        const p1 = new Promise((resolve, reject) => {
            resolve('promise 1');
        });

        const p2 = new Promise((resolve, reject)=>{
            resolve('promise 2');
        });

        const p3 = new Promise((resolve, reject)=>{
            resolve('promise 3');
        });
        // promise의 작업들이 모두 완료 될 때 까지 대기 한 후 .then에서 출력
        // 만일 이 세 작업 중 하나라도 완료된것을 출력하고자 할때, Promise.race()를 사용한다. 
        Promise.all([
            p1,
            p2,
            p3
        ]).then((message)=> {
            console.log(messages);
        });
    ```
- d. Async, Await 
  - 1. Promise code 예시
    ```javascript 
    function makeRequest(location){
        return new Promise((resolve, reject)=>{
            console.log(`making Request to ${location}`);
            if(location === 'Google'){
                resolve('Google says hi');
            }else {
                reject('We can only talk to Google');
            }
        });
    }
    
    function processRequest(response){
        return new Promise((resolve, reject)=> {
            console.log('Processing response');
            resolve(`Extra Information + ${response}`);
        });
    }

    makeRequest('Google').then(response => {
        console.log(`Response Received`);
        return processRequest(response)
    }).then(processResponse => {
        console.log(processResponse);
    }).catch(err=>{
        console.log(err);
    })
    //  output:
    //  making Request to Google
    //  Response Received
    //  Processing response
    //  Extra Information + Google says hi
    ```
- 2. async code 
    ```javascript
    async function doWork(){
        try{
                const response = await makeRequest('Google');
                console.log(`Response Received`); 
                const processResponse = await processRequest(response);
                console.log(processResponse); 
        }catch (err){
            console.log(err);
        }
          
    }
    doWork();
    
    ```