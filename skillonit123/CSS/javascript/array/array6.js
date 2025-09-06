// count how to even number in array 
let arr=[2 ,5,6 ,56,0,44];
let eventcount=0;
for (let i=1;i<arr.length;i++){
          if (arr[i] %2==0)
                    eventcount++;
}
console.log("Event Count:",eventcount);