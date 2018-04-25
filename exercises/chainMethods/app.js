
// 3. Multiply each remaining number by 1.5 and then subtract 1.
// 4. Then output (either in the DOM or the console) the sum of all the resulting numbers.
const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let newOutput = integers.sort((a,b) => a < b ? 1 : -1).filter(int => int <= 19).map(int => (int * 1.5) -1).reduce((total, next) => total + next)

console.log(newOutput)
