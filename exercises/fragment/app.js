
// // Put an article DOM element in your index.html with the id attribute value of messages.

// // In your JavaScript, use querySelector() to obtain a reference to that article DOM element.

// // Create five (5) section elements, each with a class of message, and with textContent of your choosing.

// // Using appendChild(), attach each message as a child to the messages element.

const createElements = () => {

    const fragment = document.createDocumentFragment(),
        messages = document.querySelector('#messages'),
        allEl = [],
        messOne = document.createElement('section'),
        messTwo = document.createElement('section'),
        messThree = document.createElement('section'),
        messFour = document.createElement('section'),
        messFive = document.createElement('section');

    allEl.push(messOne, messTwo, messThree, messFour, messFive);

    allEl.forEach(el => {
        el.classList.add('message')
        el.textContent = Math.floor(Math.random() * 100)
        fragment.appendChild(el);
    })

    messages.appendChild(fragment)
}

createElements()