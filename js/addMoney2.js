

document.getElementById('btn').addEventListener('click', function (event) {
    event.preventDefault();
    const addMoney2 = getInputFieldValueById('amount');
    const pinCode = getInputFieldValueById('pin');

    if(isNaN(addMoney2)){
        alert('Invalid')
        return;
    }

    if (pinCode === 1234) {
        const accountBalance = getTextFieldValueById('balance')
        const newBalance = accountBalance + addMoney2;
        console.log(newBalance);

        document.getElementById('balance').innerText = newBalance;

        // add to transaction history
        const entry = document.createElement('p');
        entry.innerText = `Added: ${addMoney2} tk. New balance: ${newBalance}`
        
        document.getElementById('transaction-container').appendChild(entry)

    }
    else {
        alert('try again later');
    }


})