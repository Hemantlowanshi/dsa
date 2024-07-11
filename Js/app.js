function get(){
    return new Promise((resolve,rejected)=>{
   setTimeout(()=>{
let num= Math.floor(Math.random()*10)+1;
console.log(num);
resolve();
   },1000);
    });
}

async function hello(){
 await get();
get();
get();
}
console.log(hello());