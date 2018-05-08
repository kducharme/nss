const $ = require('jquery');

$.ajax('http://localhost:8088/food')
    .then(response => {
        console.log(response)
    })

