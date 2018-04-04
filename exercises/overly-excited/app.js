let sentenceWords = [],
    printWords = "",
    sentence = "The walrus danced through the trees in the light of the moon";
sentenceWords = sentence.split(" ");

const excitement = addExcitement = () => {
    for (let i = 0; i < sentenceWords.length; i++) {
        if ((i + 1) % 3 == 0) {
            printWords += `${sentenceWords[i]}!`;
        }
            if ((i + 1) % 6 == 0) {
                printWords += `!`;
        }
            if ((i + 1) % 9 == 0) {
                printWords += `!!`;
        }
            if ((i + 1) % 12 == 0) {
                printWords += `!!!`;
        }
        else {
            printWords += ` ${sentenceWords[i]} `
        }
        console.log(printWords);
    }
}

addExcitement();