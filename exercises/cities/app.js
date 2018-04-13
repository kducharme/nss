const cityData = loadDatabase();

const createCards = (filter) => {
    const allCities = cityData.cities;
    let startYear = filter.start,
        endYear = filter.end,
        search = filter.search,
        searchedCity = '';

    if (!startYear && !endYear) {
        startYear = 0;
        endYear = 2500;
    }

    if (search) {
        if (search.length > 2) {
            allCities.forEach(city => {
                let searchTerm = new RegExp(search, 'g' + 'i'),
                    cityName = city.name,
                    findCity = cityName.search(searchTerm),
                    searchedCities;

                if (findCity != -1) {
                    searchedCity = cityName
                }
            })
        }
        else {
            searchedCity = allCities;
        }
    }

    allCities.forEach(indivCity => {
        if (startYear <= indivCity.year && endYear >= indivCity.year) {
            if (!search || searchedCity === indivCity.name) {
                const card = document.createElement('div') // Primary card structure
                card.classList.add('card') // Adds stying for card
                const header = document.createElement('h2'); // City name
                const cityData = document.createElement('span'); // Supporting city info
                const image = document.createElement('img'); // Creating image element

                header.textContent = indivCity.name;
                image.src = indivCity.image
                card.appendChild(header)
                card.appendChild(image).classList.add('card--image')

                const attractions = indivCity.attractions;
                for (let key in attractions) {
                    detail = document.createElement('p')
                    detail.textContent += attractions[key];
                    cityData.appendChild(detail)
                }
                card.appendChild(cityData)

                printCards(card)
            }
        }
    });
}

// Loads all card on load
window.addEventListener('load', createCards)

const printCards = (card) => {
    const printArea = document.querySelector('#printCards');
    printArea.appendChild(card)
};