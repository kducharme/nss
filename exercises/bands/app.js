const bands = [];

const addNew = document.querySelector('#add').addEventListener('click', takeNumber);

function takeNumber() {
    let bandName = prompt("enter band name: "),
        bandCount = bands.length + 1;
    bands.push(bandName);
    console.log(`${bandCount}. ${bandName} in the console.`)
}
