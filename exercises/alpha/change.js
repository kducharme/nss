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
    const printArea = document.querySelector('#printCards');

    allCards.forEach(card => {
        if (clickedCard.id === card.id) {
            let location = allCards.indexOf(clickedCard)
            allCards.splice(location, 1);
            printArea.removeChild(clickedCard);
        }
    })
}