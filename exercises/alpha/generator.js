// Creates new ID for card
function* cardMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const cardID = cardMaker();

// Creates new id for background color input
function* backgroundColorMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const backgroundColorID = backgroundColorMaker();

// Creates new id for font color input
function* fontColorMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const fontColorID = fontColorMaker();

// Creates new id for delete button
function* createDelete() {
    let index = 0;
    while (index < index + 1)
    yield index++;
}

const deleteID = createDelete();