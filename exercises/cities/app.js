// Filter the cards based on specific year visited, or all cities
// Style each card with a different background color, colored by continent (North America = green, South America = blue, Asia = purple, Antarctica = yellow, Europe = orange, Africa = red, Australia = brown)

const cityData = loadDatabase();

const createCards = (cityData) => {
    const allCities = cityData.cities;
    let detail;

    allCities.forEach(indivCity => {
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
    });
}

const printCards = (card) => {
    const printArea = document.querySelector('#printCards');


    printArea.appendChild(card)
    console.log(card)
}



createCards(cityData);