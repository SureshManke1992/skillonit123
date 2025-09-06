// couun that how many odd number are given array
let arr=[2,3,5,7,8,22,11,13,34,23];
let oddCount=0;
for (let i=0;i<arr.length;i++){
          if (arr[i]%2 !==0) oddCount++;
          console.log("odd count:",oddCount);
}