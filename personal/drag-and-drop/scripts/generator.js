function* idMaker() {
    let index = 3;
    while (index < index + 1)
        yield index++;
}

const gen = idMaker();