const transactionsList = {};
transactionsList.individual = [];
transactionsList.business = [];

// Form hsown if a user is an existing customer
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

    if (enteredAccountNum.length === 4) {
        console.log(allAccounts)
        if (allAccounts.length !== 0) {
            for (let i = 0; i < allAccounts.length; i++) {
                if (enteredAccountNum === allAccounts[i].accountNum) {
                    let newEl = document.createElement('p');
                    newEl.textContent = `Customer name: ${allAccounts[i].name}`
                    console.log('success')
                }
                else {
                    console.log('fail')
                    let newEl = document.createElement('p');
                    newEl.textContent = "Are you sure you have an account?"
                }
            }
        }
        else {
            console.log('No users exist yet')
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
        date = document.querySelector('#date').value,
        notes = document.querySelector('#notes').value,
        transaction;

    transaction = Object.create({}, {
        accountNum: { writable: false, value: accountNum },
        name: { writable: false, value: name },
        type: { writable: false, value: type },
        amount: { writable: false, value: amount },
        date: { writable: false, value: date },
        notes: { writable: false, value: notes }
    })
    checkCustomer(transaction)
}

// Event listener for submitting transaction form
document.querySelector('#submit').addEventListener('click', newTransaction)

// Checks whether or not the customer already exists in the system
const checkCustomer = (transaction) => {
    const submittedNum = transaction.accountNum;
    const submittedName = transaction.name;
    const allAccounts = transactionsList.individual.concat(transactionsList.business);

    for (let i = 0; i < allAccounts.length; i++) {
        if (submittedName === allAccounts[i].name) {
            alert(`Are you sure you don't have an account, ${transaction.name}?`)
        }
        else {
            const generatedAccountNum = Math.floor(1000 + Math.random() * 9000);
            return generatedAccountNum;
        }
    }
}

// Posts new transaction to database
const postToDatabase = (databaseObject, transactions) => {
    const stringifiedTransactions = JSON.stringify(transactions)
    localStorage.setItem(databaseObject, transactions)
}


