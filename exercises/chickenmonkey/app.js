// Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".

const print = () => {
    let printedNum = '';
    for (let i = 1; i <= 100; i++) {
        if (i % 5 === 0) {
            num = 'Chicken';
        }
        else if (i % 7 === 0) {
            num = 'Monkey';
        }
        else if (i % 5 === 0 && i % 7 === 0) {
            num = 'ChickenMonkey';
        }
        else {
            num = i;
        }
        printedNum += num;
        console.log(printedNum)
    }
}

print();