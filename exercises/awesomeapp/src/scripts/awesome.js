const domBuilder = require('./DomBuilder');
const cardFactory = require('./cardFactory');

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

const createInputArea = () => {
    const fragment = document.createDocumentFragment();
    const button = buttonFactory('createCard__button', 'Create card', cardFactory);
    const input = inputFactory('createCard__input', 'Enter card text', 'text');
    fragment.appendChild(input)
    fragment.appendChild(button)

    return fragment;
}

const clearFields = () => {
    const input = document.querySelector('.createCard__input');
    input.value = '';
}

domBuilder(createInputArea(), '#output' )

createInputArea()

