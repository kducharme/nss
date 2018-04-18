
// 4. Above the text on each card, there must be a button element labeled *Delete*.
// 5. When the user selects a color from the first input, then the background color of that card, and no other cards, should change to the color chosen.
// 6. When the user selects a color from the second input, then the font color of that card, and no other cards, should change to the color chosen.
// 7. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

const createCard = () => {
    const cardStructure = document.createElement('span');
    const value = document.querySelector('#textInput').value;
    const text = document.createElement('p');
    
    const inputs = addInputs();
    
    cardStructure.classList.add('card');
    text.textContent = value;

    cardStructure.appendChild(inputs[0])
    cardStructure.appendChild(inputs[1])

    cardStructure.appendChild(text);

    printCard(cardStructure);
}

const create = document.querySelector('#create').addEventListener('click', createCard)

const printCard = (card) => {
    const printArea = document.querySelector('#printCards')
    printArea.appendChild(card)
}

// Generator to set value for inputs
function* colorMaker() {
    let index = 0;
    while (index < index + 1)
        yield index++;
}

const colorID = colorMaker();

const addInputs = () => {
    const inputs = [];
    const returnInputs = [];
    const inputOne = document.createElement('input');
    const inputTwo = document.createElement('input');
    inputs.push(inputOne, inputTwo)
    
    inputs.forEach(input => {
        input.setAttribute('type', 'color')
        input.setAttribute('id', `color${colorID.next().value}`)
        input.classList.add('color-input')
        returnInputs.push(input)
    })
    
    return returnInputs;
}