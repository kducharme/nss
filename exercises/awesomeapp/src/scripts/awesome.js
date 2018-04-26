const printArea = document.querySelector('#output');

const printCard = (e) => {
    const card = document.createElement('span');
    const text = document.createElement('p')
    const value = e.path[1].children[0];
    text.textContent = value.value;
    card.classList.add('card')
    card.appendChild(text);
    printArea.appendChild(card)
    clearFields()
}

const inputFactory = (classList, placeholder, type) => {
    const input = document.createElement('input');
    input.setAttribute('type', type)
    input.placeholder = placeholder;
    input.classList = classList;
    return input;
}

const buttonFactory = (classList, buttonText, event) => {
    const button = document.createElement('button');
    button.addEventListener('click', event);
    button.textContent = buttonText;
    button.classList = classList;
    return button;
}

const createCardArea = () => {
    const fragment = document.createDocumentFragment();
    const button = buttonFactory('createCard__button', 'Create card', printCard);
    const input = inputFactory('createCard__input', 'Enter card text', 'text');
    fragment.appendChild(input);
    fragment.appendChild(button);
    printArea.appendChild(fragment)
}

const clearFields = () => {
    const input = document.querySelector('.createCard__input');
    input.value = '';
}

createCardArea()

