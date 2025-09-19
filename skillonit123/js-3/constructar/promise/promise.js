// Promise :-minitial state the asynchoronouse opretion is still in progress


// fullfiled(or resolved)The opretion completed succesfully and the the promise has a resulting value



// rejected :- the opretiopn  is the failed and the promise  has a resolved for the failuar can error
 

// let data = false;
// let promise =new Promise(function(res,rej){
//           data=true;
//           if (data){
//                     res( "abcd" )
//           }else{
//                     rej("Wrong  paassword")
//           }
// });
// // than .catch 



// promise.then(function(res){
//     console.log("result is", res)
// })

// promise.catch(function(err){
//     // console.log(err)
// })

let input= document.querySelector("input")
let img= document.querySelector("img")
let password=123456;
function checkfun(){
          let x=input.value;
          let promise=new Promise(function(res,rej){
                    if (password==x){
                              res("password Match")
                    }else{
                              rej("wrong password")
                    }
          })
         promise.then(function(res){
        // console.log(res)
        img.src = "https://media.tenor.com/UVmpVqlpVhQAAAAM/yess-yes.gif";
    })
    .catch(function(err){
        console.log(err)
         img.src = "https://media.tenor.com/vLK4Mq3jiKIAAAAM/cat-no.gif";
    })
}

function Delayfun(){
img.src="https://loading.io/assets/mod/spinner/default/lg.gif"
setTimeout(Checkfun, 2000);
}
