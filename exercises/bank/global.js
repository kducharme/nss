let existingCustomer = {

}

// Form show if a user is an existing customer
const showForms = (e) => {
    const newCustomerForm = document.querySelector('#new-customer');
    const existingCustomerForm = document.querySelector('#returning-customer');
    const transactionForm = document.querySelector('#transaction');
    const submitForm = document.querySelector('#submit');
    const createAccount = document.querySelector('#create');
    transactionForm.classList.add('hide');
    
    if (e.target.value === 'new') {
        createAccount.classList.remove('hide');
        newCustomerForm.classList.remove('hide');
        existingCustomerForm.classList.add('hide');
    }
    else if (e.target.value === 'existing') {
        existingCustomerForm.classList.remove('hide');
        newCustomerForm.classList.add('hide');
        submitForm.classList.remove('hide');
        transactionForm.classList.remove('hide');
    }
}

// Invokes newUser is a user selects that they are existing
document.querySelector('#options').addEventListener('click', showForms);

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