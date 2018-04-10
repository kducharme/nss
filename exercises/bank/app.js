const transactionsList = {};
transactionsList.individual = [];
transactionsList.business = [];

//Sample data to validate if product works
const transOne = Object.create({}, {
    accountNum: { writable: false, value: 1234 },
    name: { writable: false, value: 'Kyle Ducharme' },
    type: { writable: false, value: 'Individual' },
    amount: { writable: false, value: 270 },
    notes: { writable: false, value: 'Saving for something really cool' }
})

const transTwo = Object.create({}, {
    accountNum: { writable: false, value: 5142 },
    name: { writable: false, value: 'Bob Armstrong' },
    type: { writable: false, value: 'Business' },
    amount: { writable: false, value: 500 },
    notes: { writable: false, value: 'Money received from customer' }
})

transactionsList.individual.push(transOne);
transactionsList.business.push(transTwo);

// Form show if a user is an existing customer
const showForms = (e) => {
    const newCustomerForm = document.querySelector('#new-customer');
    const existingCustomerForm = document.querySelector('#returning-customer');
    const transactionForm = document.querySelector('#transaction');
    const submitForm = document.querySelector('#submit');

    transactionForm.classList.remove('hide');

    if (e.target.value == 'new') {
        newCustomerForm.classList.remove('hide');
        submitForm.classList.remove('hide');
        existingCustomerForm.classList.add('hide');
    }
    else if (e.target.value === 'existing') {
        existingCustomerForm.classList.remove('hide');
        newCustomerForm.classList.add('hide');
        submitForm.classList.remove('hide');
    }
}

// Invokes newUser is a user selects that they are existing
document.querySelector('#options').addEventListener('click', showForms);

// Validates whether or not the existing user is in the system
const checkAccount = () => {
    const enteredAccountNum = document.querySelector('#bank-number').value;
    const postInfo = document.querySelector('#returning-info');
    const allAccounts = transactionsList.individual.concat(transactionsList.business);

    if (enteredAccountNum.value !== "") {
        if (enteredAccountNum.length === 4) {
            if (allAccounts.length !== 0) {
                for (let i = 0; i < allAccounts.length; i++) {
                    if (enteredAccountNum === allAccounts[i].accountNum) {
                        postInfo.classList.remove('hide');
                        postInfo.textContent = `Customer name: ${allAccounts[i].name}`
                    }
                    else {
                        postInfo.classList.remove('hide');
                        postInfo.textContent = "Are you sure you have an account?"
                    }
                }
            }
            else {
                postInfo.classList.remove('hide');
                postInfo.textContent = "No users in the system yet!"
            }
        }
        else {
            postInfo.classList.add('hide');
        }
    }
}

document.querySelector('#bank-number').addEventListener('keyup', checkAccount)

// Receives data from form and creates a new transaction
const newTransaction = () => {
    let name = document.querySelector('#name').value,
        accountNum = document.querySelector('#bank-number').value,
        type = document.querySelector('#type').value,
        amount = parseFloat(document.querySelector('#amount').value),
        notes = document.querySelector('#notes').value,
        transaction;

    transaction = Object.create({}, {
        accountNum: { writable: false, value: accountNum },
        name: { writable: false, value: name },
        type: { writable: false, value: type },
        amount: { writable: false, value: amount },
        notes: { writable: false, value: notes }
    })

    validateUser(transaction);

    // printTransaction(transaction)
}

const submitTransaction = document.querySelector('#submit').addEventListener('click', newTransaction);

// Pushes new transaction to database
const pushData = (transaction) => {
    if (transaction.type === 'individual') {
        transactionsList.individual.push(transaction);
        clearForm()
    }
    else if (transaction.type === 'business') {
        transactionsList.business.push(transaction);
        clearForm()
    }
}

// Checks whether or not the customer already exists in the system
const validateUser = (transaction) => {
    const submittedName = transaction.name;
    const modal = document.querySelector('#modal');
    const close = document.querySelector('#close');
    const allAccounts = transactionsList.individual.concat(transactionsList.business);

    for (let i = 0; i < allAccounts.length; i++) {
        if (submittedName === allAccounts[i].name) {
            modal.classList.remove('hide');
            close.addEventListener('click', closeModal);
        }
        else {
            const generatedAccountNum = Math.floor(1000 + Math.random() * 9000);
            return generatedAccountNum;
        }
    }
}

const closeModal = () => {
    const modal = document.querySelector('#modal');
    modal.classList.add('hide');
}

// Event listener for submitting transaction form
document.querySelector('#submit').addEventListener('click', newTransaction)

// Resets form fields after the form was submitted
const clearForm = () => {
    let name = document.querySelector('#name'),
        accountNum = document.querySelector('#bank-number'),
        amount = document.querySelector('#amount'),
        notes = document.querySelector('#notes'),
        type = document.querySelector('#type');

    name.value = "";
    accountNum.value = "";
    amount.value = "";
    notes.value = "";
    type.value = "";
}

const printTransaction = (transaction) => {
    const area = document.querySelector('#transaction-list');
    const newPost = document.createElement('div')
    newPost.textContent = `${transaction.name} (Deposit amount: ${transaction.amount})`;

    area.appendChild(newPost);
}

// Posts new transaction to database
const postToDatabase = (databaseObject, transactions) => {
    const stringifiedTransactions = JSON.stringify(transactions)
    localStorage.setItem(databaseObject, transactions)
}


