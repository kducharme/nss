const cardFactory = () => {
    const card = document.createElement('span');
    const text = document.createElement('p')
    const value = document.querySelector('.createCard__input').value;
    text.textContent = value;
    card.classList.add('card')
    card.appendChild(text);
    return card
}

module.exports = cardFactory;