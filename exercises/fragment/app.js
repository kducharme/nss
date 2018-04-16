
// // Put an article DOM element in your index.html with the id attribute value of messages.

// // In your JavaScript, use querySelector() to obtain a reference to that article DOM element.

// // Create five (5) section elements, each with a class of message, and with textContent of your choosing.

// // Using appendChild(), attach each message as a child to the messages element.

const createElements = () => {

    const fragment = document.createDocumentFragment(),
        messages = document.querySelector('#messages'),
        allMessages = ['Hello friend', 'What is up', 'You are great', 'Hi'];

    allMessages.forEach(message => {
        let section = document.createElement('section');
        section.textContent = message;
        section.classList.add('message');
        fragment.appendChild(section)
    })

    messages.appendChild(fragment)
}

createElements()