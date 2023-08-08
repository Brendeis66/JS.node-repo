# 1. Callbacks
    ```javascript

         const posts = [
            {title: 'Post One', body: 'This is post one'},
            {title: 'Post Two', body: 'This is post two'}
        ];

        function getPosts(){
            //  setTimer() 인자에 unknown()를 callback하여 먼저 callback내부 코드를 실행하고, 
            //  1초 뒤에 dom객체를 뿌려준다.
            setTimeout(() => { 
                let output = '';

                //  iteration - forEach()도 마찬가지로 unknown()내부 부터 돌려 원소를 출력 서식을 재조합하여
                //   

                posts.forEach((post, index)=>{  
                // 각각의 원소를 뽑아낸다. 
                    output += `<li>${post.title}</li>`;
                });
                document.body.innerHTML = output;
            }, 1000/* 1 sec delay */);
        }
        function createPost(post, callback){
            setTimeout(()=>{
                posts.push(post)
                callback();
            }, 2000);
        }
    
        // 이렇게 되면 posts에 push가 되고 getpost를 호출한다. 2초가 지난뒤에 PostOne, PostTwo, Post Three가 출력된다.  
        // 호출방법 참고 
        createPost({title: 'Post Three', body: 'This is post three'}, getPosts); 
    ``` 
# 2. Promises
        const posts = [
            {title: 'Post One', body: 'This is post one'},
            {title: 'Post Two', body: 'This is post two'}
        ];

        function getPosts(){
            setTimeout(() => { //callback function 정의 하여 callback을 catch 한다.
                let output = '';
                posts.forEach((post, index)=>{ // iteration - callback function 정의하여 
                // 각각의 원소를 뽑아낸다. 
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

        //  호출 순서: createPost()에서 setTimeout() 2초를 기다리며, resolve가 이루어지면,
        //  .then()구문안의 getPosts가 호출된다.    
        createPost({title: 'Post Three', body: 'This is post three'});
        .then(getPosts);
        .catch(err => console.log(err)); //reject에 정의된 메시지가 출력된다. 

        위처럼 표현을 하거나 아래와 같이 다른식의 표현도 가능하다.
        //Promise.all
        const promise1 = Promise.resolve('Hello World');
        const promise2 = 10;
        const promise3 = new Promise((resolve, reject) => setTimeOut(resolve, 2000, 'Goodbye'));

        //json 형식의 파일을 -> 배열 형태로 fetch 한다.
        const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res.json());

        Promise.all([promise1, promise2, promise3, promise4]).then((value)=> console.log(values));
        //["Hello World", 10, "Goodbye", users[]] 출력

# 3. Async / Await
        async function init(){
            await createPost({title: 'Post Three', body: 'This is post three'});
            getPosts();
        }

        init();

# 4. Async / Await / fetch
        async function fetchUsers(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await res.json();
            console.log(data);
        }
        fetchUsers();