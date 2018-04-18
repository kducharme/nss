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

    console.log(e)
    text.style.color = currentColor;
}