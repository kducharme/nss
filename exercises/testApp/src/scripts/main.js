const $ = require('jquery');

$.ajax('http://localhost:8088/food')
    .then(data => {
        console.log(data);
        parseData(data)
    })

const parseData = (data) => {
    const allFood = Object.keys(data)
    allFood.forEach(item => {
        const { id, name, type, ethnicity, sideDishes } = data[item]
        const $structure = document.createElement('span');
        $structure.append(id, name, type, ethnicity, sideDishes)
        printData($structure)
    })
}

const printData = ($structure) => {
    const $printArea = $('#printArea');
    $printArea.append($structure)
}