// 1. Create another function called `calculate` that takes three arguments: two numbers and a function

const addNum = (num1, num2) => console.log(num1 + num2);
const subNum = (num1, num2) => console.log('sub: ', num1 - num2);

const calculate = (num1, num2, operation) => {
    operation(num1, num2);
}

calculate(10, 5, addNum);

// addNum(5, 3);
// addNum(10, 2);
// addNum(5, 1);
// subNum(10, 2);
// subNum(20, 10);
// subNum(15, 5);