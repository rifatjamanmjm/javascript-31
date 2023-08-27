function loadData2(){
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(res=> res.json()) 
 .then(data=> console.log(data))  
}


function loadusers(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=> res.json()) 
    .then(data=> displayUser(data))  
   }

   function displayUser(data){
    console.log(data);
   }