let count=1;
let id ;
function addcount(){
          console.log("count",count)
          count++;
}

if (count>5){
 clearInterval(id)
 console.log("stopped")
}
id=setInterval(addcount,1000);