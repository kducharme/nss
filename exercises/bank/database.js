// Creates transaction database structure
const transactionsList = {};
transactionsList.individual = [];
transactionsList.business = [];

//Sample data to validate if product works
const transOne = Object.create({}, {
    accountNum: { writable: false, value: 1234 },
    name: { writable: false, value: 'KYLE DUCHARME' },
    type: { writable: false, value: 'INDIVIDUAL' },
    amount: { writable: false, value: 270 },
    notes: { writable: false, value: 'NOTE GOES HERE' }
})

const transTwo = Object.create({}, {
    accountNum: { writable: false, value: 5142 },
    name: { writable: false, value: 'BOB ARMSTRONG' },
    type: { writable: false, value: 'BUSINESS' },
    amount: { writable: false, value: 500 },
    notes: { writable: false, value: 'NOTE GOES HERE' }
})

transactionsList.individual.push(transOne);
transactionsList.business.push(transTwo);

// Posts new transaction to database
const postToDatabase = (databaseObject, transactions) => {
    const stringifiedTransactions = JSON.stringify(transactions)
    localStorage.setItem(databaseObject, transactions)
}