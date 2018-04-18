// Creates new ID for card
function* cardMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const cardID = cardMaker();

// Creates new id for color input
function* colorMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const colorID = colorMaker();

// Creates new id for delete button
function* createDelete() {
    let index = 0;
    while (index < index + 1)
    yield index++;
}

const deleteID = createDelete();