const searchCountry = () => {
    let searchTerm = document.querySelector('#search').value;

    createCards(searchTerm);
}

document.querySelector('#search').addEventListener('keyup', searchCountry)