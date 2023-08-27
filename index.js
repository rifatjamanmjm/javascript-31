function loadUers2(){
   fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res=> res.json()) 
   .then(data => displayUser2(data));  

}
function displayUser2(data){
   for(const user of data){
   console.log(user.body);
}
    
}