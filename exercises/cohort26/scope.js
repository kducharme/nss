const sentence = ['This', 'is', 'so', 'fun', 'learning', 'scope'];

const printWords = () => {
    let printWords = '';
    for (let i = 0; i < sentence.length; i++) {
        printWords += sentence[i] + ' ';
        console.log(printWords)
    }
}

// printWords()

const addSymbol = () => {
    let printWords = '';

    for (let i = 0; i < sentence.length; i++) {
        let count = i + 1;
        if (count % 3 === 0) {
            printWords += sentence[i] + '! '
        }
        else {
            printWords += sentence[i] + ' '
        }
        console.log(printWords)
    }
}
// addSymbol()