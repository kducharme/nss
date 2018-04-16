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