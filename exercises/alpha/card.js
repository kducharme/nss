const allCards = [];

// Creates a new card
const createCard = () => {
    const cardStructure = document.createElement('span');
    const actionStructure = document.createElement('span');
    const value = document.querySelector('#textInput').value;
    const text = document.createElement('p');
    text.textContent = value;
    
    const inputs = addInputs();
    const button = createButton();

    actionStructure.appendChild(button)
    actionStructure.appendChild(inputs[0])
    actionStructure.appendChild(inputs[1])
    actionStructure.classList.add('actions')
    
    cardStructure.appendChild(actionStructure);
    cardStructure.appendChild(text);

    cardStructure.classList.add('card');
    cardStructure.setAttribute('id', `card${cardID.next().value}`);

    allCards.push(cardStructure);
    printCard(cardStructure);
}

const create = document.querySelector('#create').addEventListener('click', createCard)


// Prints cards to the DOM
const printCard = (card) => {
    const printArea = document.querySelector('#printCards')
    printArea.appendChild(card)
}

// Creates the color inputs for the card
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

// Creates the delete button
const createButton = () => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', `delete${deleteID.next().value}`)
    deleteButton.textContent = 'Delete'

    return deleteButton;
}