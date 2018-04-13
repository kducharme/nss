// When a new user is adding their name, this checks whether or not the name is in the system
const checkUser = () => {
    const name = document.querySelector('#name').value;
    const allAccounts = transactionsList.individual.concat(transactionsList.business);

    allAccounts.forEach(currentStudent => {
        if (currentStudent.name.toUpperCase() === name.toUpperCase()) {
            return accountNum = currentStudent.accountNum;
        }
        else {
            return accountNum = Math.floor(1000 + Math.random() * 9000);
        }
    })
};

const findUserType = document.querySelector('#create').addEventListener('click', checkUser);

const closeModal = () => {
    const modal = document.querySelector('#modal');
    modal.classList.add('hide');
}