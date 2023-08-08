# 1. Callbacks
```javascript

        const posts = [
            {title: 'Post One', body: 'This is post one'},
            {title: 'Post Two', body: 'This is post two'}
        ];

        function getPosts(){
            //  setTimeout()가 1초가 경과되면  
            //  인자의 unknown()의 callback내부 코드를 실행하고, 
            //  callback 내부 작업이 완료 되면 콜백 함수의 실행이 완료된다.
            setTimeout(() => { 
                let output = '';

                //  iteration - forEach()도 마찬가지로 unknown()내부의 코드 수행 
                //  반복문을 통해 <li>post 배열 안의 객체().title</li> 조합하여 ouput변수에 추가 
                posts.forEach((post, index)=>{  
                    output += `<li>${post.title}</li>`;
                });
                document.body.innerHTML = output;
            }, 1000 /* 1 sec delay */   );
        }

        //  인자에 함수명만, 양괄호 없이 넘겨 그리고 함수 내부에 인자()로 호출함으로써 callback 호출 
        //  마찬가지로 setTimeout()가 2초가 경과 후 unknown() 인 '()={}' 콜백함수가(구체적으로 getPost()) 종료되면 
        //  setTimer 콜백함수의 실행이 종료가 된다.
        function createPost(post, callback){
            setTimeout(()=>{
                posts.push(post)
                callback();
            }, 2000);
        }
    
        //  callback() 호출시에도 ()없이 함수명만 표기하여 해당 인자 위치에 삽입한다.
        
        //  output:
        //  <li>Post One</li> 
        //  <li>Post Two</li> 
        //  <li>Post Three</li> 
        
        //  call stack 순서 : 1.createPost 진입 -> 2. createPost.setTimer 2초 경과 후 -> 
        //  3. getPost 진입 -> 4. getPost.setTimer 1초 경과 후 -> 5. getPost.forEach() 내부 콜백 ->
        //  6. forEach() 종료 -> setTimeout 콜백 종료 -> setTimeout 콜백 종료 -> createPost 종료() 
    
        createPost({title: 'Post Three', body: 'This is post three'}, getPosts); 
``` 
# 2. Promises

```javascript
        const posts = [
            {title: 'Post One', body: 'This is post one'},
            {title: 'Post Two', body: 'This is post two'}
        ];

        function getPosts(){
            setTimeout(() => { 
                let output = '';
                posts.forEach((post, index)=>{ 
           
                    output += `<li>${post.title}</li>`;
                });
                document.body.innerHTML = output;
            }, 1000/* 1 sec delay */);
        }
        function createPost(post){
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    posts.push(post)
                    
                    const error = false;
                    if(!error) {
                        resolve();
                    }else{
                        reject('Error: Something went wrong');
                    }
                }, 2000);
            });
        }

        ///////////////////////////////////////////////////////////////////////////////////////
        //  호출 순서: 1. Promise 인스턴스 생성
        //           2. setTimeout()에서 2초 경과 후 내부 콜백이 작업이 수행되고 
        //              error 결과값에 따라 resolve 또는 reject가 수행된다.
        //           3. resolve()가 수행되면 .then(getPosts)를 통하여 getPosts()가 호출되어지며,
        //           4. reject()가 수행되면 .catch(err=> console.log(err));가 호출된다.
        ////////////////////////////////////////////////////////////////////////////////////////
    
        createPost({title: 'Post Three', body: 'This is post three'});
        .then(getPosts);
        //  reject()에 정의된 메시지가 출력된다.
        .catch(err => console.log(err));  
        ///////////////////////////////////////////////////////////////////////////////////////
        //  위처럼 표현을 하거나 아래와 같이 다른식의 표현도 가능하다.
        //  Promise.all 사용법 
        ///////////////////////////////////////////////////////////////////////////////////////
        const promise1 = Promise.resolve('Hello World');
        const promise2 = 10;
        const promise3 = new Promise((resolve, reject) => setTimeOut(resolve, 2000, 'Goodbye'));

        //  json 형식의 파일을 -> 배열 형태로 fetch 한다.
        const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res.json());

        Promise.all([promise1, promise2, promise3, promise4]).then((value)=> console.log(values));
        //  ["Hello World", 10, "Goodbye", users[]] 출력

```

# 3. Async / Await
```javascript
    async function init(){
        await createPost({title: 'Post Three', body: 'This is post three'});
        getPosts();
    }

    init();

```

# 4. Async / Await / fetch
```javascript
    async function fetchUsers(){
        const res = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await res.json();
        console.log(data);
    }
    fetchUsers();
```    
