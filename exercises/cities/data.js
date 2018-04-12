cityDatabase = {};
cityDatabase.cities = [];

cityDatabase.cities.push(
    {
        name: "Nashville",
        year: "2010",
        image: "img/nashville.jpg",
        attractions: { 
            one: 'Broadway', 
            two: 'Hattie B Chicken', 
            three: 'Vanderbilt University' ,
            four: 'Cheekwood Gardens' ,
            five: 'Nisaan Stadium' 
        }
    },
    {
        name: "Abu Dhabi",
        year: "2015",
        image: "img/abudhabi.jpg",
        attractions: { 
            one: 'Sheikh Zayed Grand Mosque', 
            two: 'Mangrove Kayaking Tours', 
            three: 'Ferrari World' ,
            four: 'Boat Tours' ,
            five: 'Observation Deck at 300' 
        }
    },
    {
        name: "Paris",
        year: "2015",
        image: "img/paris.jpg",
        attractions: { 
            one: 'Eiffel Tower', 
            two: 'The Louvre', 
            three: 'Arc De Triomphe' ,
            four: 'Disneyland' ,
            five: 'Le Marais' 
        }
    },
    {
        name: "Dubai",
        year: "2013",
        image: "img/dubai.jpg",
        attractions: { 
            one: 'Burj Khalifa', 
            two: 'Burj Al Arab', 
            three: 'Dubai Mall' ,
            four: 'Palm Jumeirah' ,
            five: 'Dubai Creek' 
        }
    },
    {
        name: "Amsterdam",
        year: "2015",
        image: "img/amsterdam.jpg",
        attractions: { 
            one: 'Dam Square', 
            two: 'Van Gogh Museum', 
            three: 'Anne Frank House' ,
            four: 'Efteling' ,
            five: 'Heiniken' 
        }
    },
    {
        name: "Montreal",
        year: "2008",
        image: "img/montreal.jpg",
        attractions: { 
            one: 'Mount Royal', 
            two: 'Old Montreal', 
            three: 'Le Ronde' ,
            four: 'Space for Life' ,
            five: 'Biodome' 
        }
    },
    {
        name: "Bankok",
        year: "2016",
        image: "img/bangkok.jpg",
        attractions: { 
            one: 'Grand Palace', 
            two: 'Floating Market', 
            three: 'Grand Mall' ,
            four: 'White Temple' ,
            five: 'MBK Center' 
        }
    },
    {
        name: "Havana",
        year: "2012",
        image: "img/Havana.jpg",
        attractions: { 
            one: 'Old Havana', 
            two: 'Morro Castle', 
            three: 'El Capitolio' ,
            four: 'Le Cabana' ,
            five: 'Finca Vigia' 
        }
    },
    {
        name: "Antwerp",
        year: "2013",
        image: "img/antwerp.jpg",
        attractions: { 
            one: 'Antwerp Zoo', 
            two: 'Museum Aan De Soon', 
            three: 'Aquatopia' ,
            four: 'Planit Museum' ,
            five: 'Vleeshuis' 
        }
    },
    {
        name: "San Francisco",
        year: "2005",
        image: "img/sanfrancisco.jpg",
        attractions: { 
            one: 'Golden Gate Bridge', 
            two: 'Alcatraz Island', 
            three: 'Google' ,
            four: 'Lombard Street' ,
            five: 'Union Square' 
        }
    }
);

const saveToDatabase = (databaseObject, cities) => {
    const stringifiedDatabase = JSON.stringify(cities);
    localStorage.setItem(databaseObject, stringifiedDatabase);
}

  const loadDatabase = () => {
    const databaseString = localStorage.getItem('cities');
    let parsedData =  JSON.parse(databaseString) 
    return parsedData;
  }

  saveToDatabase('cities', cityDatabase);


