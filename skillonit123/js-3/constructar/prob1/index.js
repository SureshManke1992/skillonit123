// //A constructar function in javascript is specilized function create and initialize object it acts as blueprint for genereting multiple insances 
// and initialize object its act a blueprint for genereting multiple instances 
// //make a function that will return object
// function  UserData(){
//           let obj={};
//           return obj
// }
// let x   = UserData()
// console.log(x)


function UserData(a,b){
          this.name=a,
          this.age=b;
}
let a= new UserData("Rahul",22);
let b = new UserData("Rahul1", 23)
let c = new UserData("Rahul2",24);
let d = new UserData("Rahul3",25);
console.log(a,b,c,d);

// object creating 3 
let objData={}// obj litreral
//construter function 
//obj .create