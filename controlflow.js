//Write a program that takes in an array of numbers and consoles the first four items multiplied by itself  and the last two added by 10. Return the array with the new values
let arrNums =[1,2,3,4,5,6,7,8,9]
const firstFour = arrNums.slice(0,4).map(item=>item*item)
console.log(firstFour)
const lastTwo = arrNums.slice(-2) .map(item=>item+10)
console.log(lastTwo)
const newArr = firstFour.concat(lastTwo)
console.log(newArr)

 

 //Write a function that takes in a an array of strings and use a continue statement when the item is at the second index:  let fruits= ['apple','plum','banana','strawberries','kiwi']

   let fruits = ['apple','plum','banana','strawberries','kiwi']
   for (let i =0; i <=fruits.length; i++){
      if(fruits[i]===2){
         continue
      }
      
   }
    console.log(fruits)

    //Write a program that takes in the following array and use a while loop to iterate and break when the item is equal to the fourth index :let arrNum = [1,2,3,4,5,6,7,8,9];
    
      let arrNum =[1,2,3,4,5,6,7,8,9]
       let n = 0
       while (n <arrNum.length){
         if (arrNum[n]===arrNum[3]){
            break;
         }
         console.log(arrNum[n]),n++
       }
       //Write a function that accepts an array of strings and console.logs each element using a for loop.
    let arrStr = ['Susan','Mwende','Masaku','Brian']
    for (let name of arrStr ){
      console.log(name.toString())
    }

    //Write a JavaScript function that takes a string as input and reverses it using a while loop. The function should return the reversed string. 
function string(str){
   let reverseStr=""
   let i = str.length-1
   while(i>=0){
      reverseStr += str.substring(i, i+1)
      i--;
   }
   console.log({reverseStr})

   } 
   string("Susan") 
   string("Jeff")





