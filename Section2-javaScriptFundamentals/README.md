# javaScript 기본


    <h2> 1. Unknown function </h2>

            1.1. 종류 

                a.  ``` java 
                        function(){} 
                    ```

                b. ()=>{}
                
                c.  function_name(args1, args2)=>{ //명시형

                }
    2. Object
            1.1. 
                    a. const object = {
                        name: '',
                        age: 29
                        function: () {
                            this.name + 'asd'; 
                            //this를 사용하기 위해서는 (){}, 또는 function()
                            //사용한다. 

                        }
                    };
                    object.function();
    
    3. Array
            1.1.
                    a.  const elementsOfArrays = ['A', 'B', 'C'];
                        for (let elements of elementsOfArrays){}

            1.2.    b. map을 이용한 함수(필수)
                        elementsOfArrays.map(args=> 'S' + elementsOfArrays)
                        //새로운 배열을 생성하여, 각 원소마다 'S'를 추가하여 삽입한다. 

            1.3.    c. 배열과 객체는 레퍼런스 타입이다. 
                        const elementsOfArray 변수는 배열의 초기 주소가 저장되고 해당 주소가 가르키는 데이타가 저장이 된다. 
                        따라서 push나 pop의 경우 배열의 값을 변경하는것이 아닌 참조된 주소에 데이타가 추가 되는 것이다. 
            

            1.4.    d. Spread, Rest연산자에 관하여 
                        원 데이타에 대한 참조 추가를 하지 않고 
                        새로운 배열(사본)에 복사하여 데이타를 조작하는게 현재 추세이다. 이것을 immutablity라고 한다. 이렇게 하여 오류를 피할 수 있으며, 
                        원코드를 읽어올 수 없는 문제를 방지 할 수 있다. 
                        const newArray = elementsOfArrays.slice(); //단순히 배열을 복사한다.

                        [spread 연산자] -- 객체나 배열에 쓰일때
                        const newArray = [...elementsOfArrays]; //spread ...주위의 데이타를 복사(기존 배열에서 모든 원소를 끄집어내어 새로운 배열에 추가해준다.)
                        (1) ...의 원소를 하나하나씩 끄집어내어
                        (2) [] 안에 넣어준다. 
                        객체도 마찬가지로, const newObject = {...Object}; 이런식으로 객체 사본으로 복사 할 수 있다. 

                        [rest 연산자 ] -- 인자에 쓰일때
                        ...args는 인자들을 조합하여, arg에 하나의 배열로 만든다.
                        const toArray = (...args) =>{
                            return args
                        };
                        console.log(toArray(1,2,3,4,5,6,7));

                        output : [1,2,3,4,5,6,7]
            
            1.5.    e. destructuring













    

    ## 부제목

        블라블라블라.