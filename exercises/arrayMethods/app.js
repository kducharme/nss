const printArea = document.querySelector('#planets');
const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const printPlanetNames = () => {
    planets.forEach(planet => {
        let el = document.createElement('p');
        el.textContent = `${planet}`
        printArea.appendChild(el)
    })
}

const printPropperCase = () => {
    const newPlanetArray = planets.map(planet => {
        const newName = planet.slice(0, 1).toUpperCase() + planet.slice(1, planet.length)
        return newName
    })
    console.log(newPlanetArray)
}


const filterPlanets = () => {
    const planetsWithE = planets.filter(planet => {
        return planetCheck = planet.includes('e')
    })
    console.log(planetsWithE)
}

// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

const reduceWords = () => {
    const sentence = words.reduce((sentenceBuild, next) => {
        return sentenceBuild + ' ' + next;
    })
    console.log(sentence)
}

reduceWords()