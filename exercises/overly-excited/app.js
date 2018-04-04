let sentenceWords = [],
    printWords = "",
    sentence = "The walrus danced through the trees in the light of the moon",
    symbol = '?';
sentenceWords = sentence.split(" ");

const excitement = addExcitement = () => {
    for (let i = 0; i < sentenceWords.length; i++) {
        let addIndex = i + 1;
        if (addIndex % 3 === 0) {
            printWords = printWords + ` ${sentenceWords[i]}` + `${symbol}`.repeat(addIndex/3);
        }
        else {
                printWords = printWords + ` ${sentenceWords[i]}`
        }
        console.log(printWords);
    }
}

addExcitement();