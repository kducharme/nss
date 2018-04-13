// Prints transaction to the DOM
const printTransaction = (transaction) => {
    const area = document.querySelector('#transaction-list');
    const newPost = document.createElement('div')
    newPost.textContent = `${transaction.name} (Deposit amount: ${transaction.amount})`;

    area.appendChild(newPost);
}