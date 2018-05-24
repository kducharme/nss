// Create an addExcitement function that should console.log() rows of words. It should take an array containing the words of a sentence and output them in the developer console.

const words = ['The', 'walrus', 'danced', 'through', 'the', 'trees', 'in', 'the', 'light', 'of', 'the', 'moon'];

const printSentence = () => {
    // Creates an empty string and assigns it to a variable
    let printWords = '';

    // Iterates through the words array and increases count by 1 each time thru
    for (let i = 0; i < words.length; i++) {

        // Builds the string with the new word
        printWords += words[i] + ' ';

    }
    // Logs the string to the console
    console.log(printWords)
}

// printSentence()

// Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.

const overlyExcitedFirst = () => {
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
        co
        nsole.log(printWords)
    }
}
// overlyExcitedFirst()

const overlyExcitedSecond = () => {
    // Creates an empty string and assigns it to a variable
    let printWords = '';

    for (let i = 0; i < words.length; i++) {

        // Sets the count starting at 1 (not 0 index of array)
        let count = i + 1;

        // If the current index can be divided by 3 without a remainder, do this.
        if (count % 3 === 0) {
            printWords += ' ' + words[i] + '!'

            if (count % 6 === 0) {
                printWords += '!'
            }

            if (count % 9 === 0) {
                printWords += '!!'
            }

            if (count % 12 === 0) {
                printWords += '!!'
            }
        }

        // If the current index CANNOT be divided by 3 without a remainder, do this.
        else {
            printWords += ' ' + words[i]
        }


        console.log(printWords)
    }
}
overlyExcitedSecond()



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
            printWords = printWords + ` ${words[i]}` + `${symbol}`.repeat(count / 3); // Repeat adding the symbol based on count
        }

        // If the current index CANNOT be divided by 3 without a remainder, do this.
        else {
            printWords = printWords + ` ${words[i]}`
        }

        console.log(printWords);

    }
}

// overlyExcitedLast()
