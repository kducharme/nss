// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

function printSentence () {
    // Creates an empty string and assigns it to a variable
    let printWords = '';

    // Iterates through the words array and increases count by 1 each time thru
    for (let i = 0; i < words.length; i++) {

        // Builds the string with the new word
        printWords += `${words[i]} `;

    }
    console.log(printWords)
    // Logs the string to the console
}

// printSentence()






// Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.

function overlyExcitedFirst () {
    // Creates an empty string and assigns it to a variable
    let printWords = '';

    for (let i = 0; i < words.length; i++) {

        // Sets the count starting at 1 (not 0 index of array)
        let count = i + 1;

        // If the current index can be divided by 3 without a remainder, do this.
        if (count % 3 === 0) {
            printWords += words[i] + '! '
        }

        // If the current index CANNOT be divided by 3 without a remainder, do this.
        else {
            printWords += words[i] + ' '
        }
    }
    console.log(printWords)
}
// overlyExcitedFirst()


const words = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];

words[2]


const overlyExcitedSecond = () => {
    // Creates an empty string and assigns it to a variable
    let printWords = '';

    for (let i = 0; i < words.length; i++) {

        // Sets the count starting at 1 (not 0 index of array)
        let count = i + 1;

        // If the current index can be divided by 3 without a remainder, do this.
        if (count % 3 === 0) {
            printWords += ' ' + words[i] + '!'
            console.log('3')

            if (count % 6 === 0) {
                printWords += '!'
                console.log('6')
            }
            
            if (count % 9 === 0) {
                printWords += '!!'
                console.log('9')
            }
            
            if (count % 12 === 0) {
                printWords += '!!'
                console.log('12')
            }
        }

        // If the current index CANNOT be divided by 3 without a remainder, do this.
        else {
            printWords += ' ' + words[i]
        }


        console.log(printWords)
    }
}
// overlyExcitedSecond()



const symbol = '!'

const overlyExcitedLast = () => {
    // Creates an empty string and assigns it to a variable
    let printWords = '';

    // Iterates through the words array and increases count by 1 each time thru
    for (let i = 0; i < words.length; i++) {
        // Sets the count starting at 1 (not 0 index of array)
        let count = i + 1;

        // If the current index can be divided by 3 without a remainder, do this.
        if (count % 3 === 0) {
            printWords += ` ${words[i]}` + `${symbol}`.repeat(count / 3); // Repeat adding the symbol based on count
        }

        // If the current index CANNOT be divided by 3 without a remainder, do this.
        else {
            printWords += ` ${words[i]}`
        }

        console.log(printWords);

    }
}

// overlyExcitedLast()
