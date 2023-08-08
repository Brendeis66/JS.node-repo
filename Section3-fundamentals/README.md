# javaScript 기본

### 1. functions 

- 1.1. *종류*

    - a. *비명시적 함수*
    ```javascript
        function(){} 
    ```
    - b. *비명시적 함수*   
    ```javascript
        ()=>{}
    ```
          
    - c. *명시적 함수*
    ```javascript
        function function_name(args1, args2)=>{ 
        }
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
        elementsOfArrays.map(args=> 'S' + elementsOfArrays)
         
    
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
            //  객체도 마찬가지로, const newObject = {...Object}; 이런식으로 객체 사본으로 복사 할 수 있다.    
            const newArray = [...elementsOfArrays];  

            ////////////////////////////////////////////////////////////////////////////
            //  [rest 연산자 ] -- 용도(인자에 쓰일때 사용)           
            ////////////////////////////////////////////////////////////////////////////
            //   ...args는 인자들을 조합하여, arg에 하나의 배열로 만든다. 
            const toArray = (...args) =>{
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

- a. Asyncronous function 정의 
    
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
                setTimeout(()=>{
                resolve('Done.');
            }, 1500);
            });
            // promise 인스턴스가 리턴시에 resolve, reject 여부에 따라 .then, .catch인지 여부가 결정된다. 
            return promise; 
        };

        setTimeout(()=>{
            console.log('Timer is done!');
            fetchData()
            .then(text=> {
                console.log(text);
                return fetchData(); //다음 .then의 참조용을 위해 다시 호출
            })
            .then(text2 =>{
                console.log(text2);
            });

        }, 2000);

        console.log('Hello!');  //동기적 코드
        console.log('Hi!');     //동기적 코드
     
   //췍췍 
    
    ```

