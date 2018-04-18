// 7. When the user clicks the *Delete* button, the containing card, and no other cards, should then be removed from the DOM. Not just made invisible, actually removed from the DOM.

// Selecting first input changes background color

const selectBackgroundColor = (e) => {
    const clickedCard = e.path[2];
    const currentColor = e.target.value;
    clickedCard.style.backgroundColor = currentColor;
}

const selectFontColor = (e) => {
    const clickedCard = e.path[2];
    const text = e.path[2].children[1];
    const currentColor = e.target.value;
    text.style.color = currentColor;
}

const deleteCard = (e) => {
    const clickedCard = e.path[2];
    const findCard = `span#${clickedCard}.card`;

    console.log(allCards)
    console.log(clickedCard)
    console.log(findCard)

    allCards.forEach(card => {
        if (clickedCard.id === card.id) {
            clickedCard.classList.add('hide')
        }
        else {
            console.log('no')
        }
    })
}