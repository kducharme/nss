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

// const filteredCards = locations.filter(place => place.country === 'Thailand');

// const travelClose = locations.sort((a,b) => a.hours > b.hours ? 1 : -1);