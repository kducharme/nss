// Receives data from form and creates a new transaction
const newTransaction = () => {
    const name = document.querySelector('#name').value.toUpperCase();
    const type = document.querySelector('#type').value.toUpperCase();
    const amount = parseFloat(document.querySelector('#amount').value);
    const notes = document.querySelector('#notes').value;

    const transaction = Object.create({}, {
        name: { writable: false, value: name },
        accountNum: { writable: false, value: checkUser() },
        type: { writable: false, value: type },
        amount: { writable: false, value: amount },
        notes: { writable: false, value: notes }
    })

    printTransaction(transaction)
    pushData(transaction)
    clearForm()
}

const submitTransaction = document.querySelector('#submit').addEventListener('click', newTransaction);