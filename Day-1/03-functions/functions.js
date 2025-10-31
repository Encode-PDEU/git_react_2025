function sayHello(){
    console.log("Hellooo !");
}
sayHello()


function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}
const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

// default argument in above case

function sum(myArr){
    let count = 0;
    for(const num in myArr){
        count += num;
    }
    return count;
}

//arrow function
let myFun = (a, b) => {
    return a + b;
}