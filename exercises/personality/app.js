allCards = [];

const Card = (cardTitle, cardBody) => {
    this.cardTitle = title;
    this.cardBody = body;
}

const createCard = () => {
    let cardTitle = prompt('Enter title'),
        cardBody = prompt('Enter body');

    let newCard = new Card(cardTitle, cardBody);
    allCards.push(newCard)
    
    postCard(cardTitle, cardBody);
}

const postCard = (cardTitle, cardBody) => {
    let postCards = document.querySelector('#card');

    for (let i = 0; i < allCards.length; i++) {
        postCards += `<div class='card--one'>
        <p class='card--title'>${cardTitle}</p>
        <p class='card--body'>${cardBody}</p>
        </div>`
    }
    postCards.innerHTML = newCard;
}

let newCard = document.querySelector('#add').addEventListener('click', createCard);