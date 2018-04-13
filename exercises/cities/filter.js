const filterByYear = () => {
    const printArea = document.querySelector('#printCards');
    let startYear = document.querySelector('#startYear').value,
        endYear = document.querySelector('#endYear').value,
        searchTerm = document.querySelector('#search').value;

        filter = {
            start: startYear,
            end: endYear,
            search: searchTerm
        };

    printArea.innerHTML = '';

    createCards(filter);
}

document.querySelector('#submit').addEventListener('click', filterByYear)
document.querySelector('#search').addEventListener('keyup', filterByYear)