const filterByYear = () => {
    const printArea = document.querySelector('#printCards');
    let startYear = document.querySelector('#startYear').value,
        endYear = document.querySelector('#endYear').value,
        filter = {
            start: startYear,
            end: endYear
        };

    printArea.innerHTML = '';
    createCards(filter);
}

document.querySelector('#submit').addEventListener('click', filterByYear)

const searchCountry = () => {
    let searchTerm = document.querySelector('#search').value;
    return searchTerm;
}

document.querySelector('#search').addEventListener('keyup', searchCountry)