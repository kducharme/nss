// Creates new ID for card
function* idMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const cardID = idMaker();
const fontColorID = idMaker();
const backgroundColorID = idMaker();
const deleteID = idMaker();