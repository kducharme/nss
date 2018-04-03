// Exercise: Using Javascript, create a variable to hold your last name. Using the if-else statement, do the following: If your last name has 7 or more letters, console log "I can't pronounce this last name". Else, console log your last name.

// Challenge: Create a new repository on Github and push the code you wrote up to Github.

function lastName() {
    let lastName = "ducharme";

    if (lastName.length >= 7) {
        console.log('I can\'t pronounce this last name.');
    }
    else {
        console.log(lastName);
    }
}