// Forms shown to a returning customer
const returningCustomer = () => {
    const modal = document.querySelector('#modal');
    const newCustomerForm = document.querySelector('#new-customer');
    const existingCustomerForm = document.querySelector('#returning-customer');

    modal.classList.toggle('hide');
    existingCustomerForm.classList.toggle('hide');
    newCustomerForm.classList.toggle('hide');
}

// Validates whether or not the existing user is in the system
const checkAccount = () => {
    const enteredAccountNum = document.querySelector('#bank-number').value;
    const postInfo = document.querySelector('#returning-info');
    const allAccounts = transactionsList.individual.concat(transactionsList.business);
    
    if (enteredAccountNum.value !== "" && enteredAccountNum.length === 4 & allAccounts.length !== 0) {
        postInfo.classList.remove('hide');

        for (let i = 0; i < allAccounts.length; i++) {
            const  name = allAccounts[i].name.split(' ');
            const firstName = name[0].charAt(0).toUpperCase() + name[0].slice(1).toLowerCase();
            const lastName = name[1].charAt(0).toUpperCase() + name[1].slice(1).toLowerCase();
            const fullName = `${firstName} ${lastName}`;

            if (enteredAccountNum == allAccounts[i].accountNum) {
                postInfo.textContent = `Welcome back, ${fullName}! What would you like to deposit today?`;
                return;
            }
            else if (enteredAccountNum !== allAccounts[i].accountNum) {
                postInfo.textContent = "Are you sure you have an account?"
            }
            else {
                postInfo.textContent = "No users in the system yet!"
            }
        }
    }
    else {
        postInfo.classList.add('hide');
    }
}

document.querySelector('#bank-number').addEventListener('keyup', checkAccount)
