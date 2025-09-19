//asynchronous js 
// setInterval(function,time(ms))
// settimeout(function,time(ms))
// clearInterval(id)
//synchoronouse
// function a (){
//           console.log("hello -1")
// }
// function b(){
//           console.log("hello-2")
// }
// function c(){
//           console.log("hello-3")
// }
// a()
// b()
// c()
//  setInterval(c,2000)

// //a()
// srtTimeout(b,2000)

console.log("start")
setTimeout (function(){
          console.log("helloafter 3 sec")
} )
console.log("end")
