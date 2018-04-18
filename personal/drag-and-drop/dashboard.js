//Drag and drop functionality
const allowDrop = (allowdropevent) => {
    allowdropevent.preventDefault();
}

const drag = (dragevent) => {
    dragevent.dataTransfer.setData("text", dragevent.target.id);
}

const drop = (dropevent) => {
    dropevent.preventDefault();
    let data = dropevent.dataTransfer.getData("text");
    dropevent.target.appendChild(document.getElementById(data));
}

// Gets DB data
const databaseData = loadDatabase();

const printAssociates = () => {
    const associates = databaseData[0];
    const printArea = document.querySelector('#associates');
    
    associates.forEach(person => {
        const associateRow = document.createElement('span');
        const name = document.createElement('p');
        const location = document.createElement('p');

        name.textContent = person.name;
        name.classList.add('associate-name');
        
        location.textContent = person.location;
        location.classList.add('associate-location');

        associateRow.classList.add('associate-row')

        associateRow.appendChild(name);
        associateRow.appendChild(location);
        printArea.appendChild(associateRow);
    })

    console.log(associates)
}

const printLocations = () => {
    const printArea = document.querySelector('#countries');
    const associates = databaseData[1];

    associates.forEach(nick => {
        const location = document.createElement('p');
        location.textContent = nick;
        location.classList.add('nickname')

        printArea.appendChild(location)
    })

}

const printNicknames = () => {
    const printArea = document.querySelector('#nicknames');
    const associates = databaseData[2];

    associates.forEach(nick => {
        const name = document.createElement('p');
        name.textContent = nick;
        name.classList.add('nickname')

        printArea.appendChild(name)
    })

}

printAssociates()
printLocations()
printNicknames()